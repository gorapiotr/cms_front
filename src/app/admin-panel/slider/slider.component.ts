import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Slider } from "../../_models/Slider/Slider";
import { SnotifyService} from "ng-snotify";
import { SliderService } from '../../_services/slider/slider.service';
import { HttpClient } from "@angular/common/http";
import * as firebase from "firebase";
import index from "@angular/cli/lib/cli";
// import * as Rx from 'rxjs'
// import 'rxjs/add/dom'

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    providers: [NgbCarouselConfig]
})

export class SliderComponent {
    // exampleImages = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    images: Array<string> = [];    //list of URLs for images stored in firebase storage
    canvas: HTMLCanvasElement;
    context;
    // imgInCanvas = false;
    exampleImgPresented = false;
    showNavigationArrows = true;
    showNavigationIndicators = true;
    public error = null;
    hideLoader = false;
    // selectedFile: File = null;
    selectedFile: HTMLImageElement = null;
    firebaseConfig = {
        apiKey: "AIzaSyBQ3Ch9knXozMSCz0QWUXtjyG22O_gP3Lk",
        authDomain: "cmsproject-49632.firebaseapp.com",
        databaseURL: "https://cmsproject-49632.firebaseio.com",
        projectId: "cmsproject-49632",
        storageBucket: "cmsproject-49632.appspot.com",
        messagingSenderId: "864662869534"
    };
    slide = new Slider();

    constructor(private http: HttpClient, config: NgbCarouselConfig, protected sliderService: SliderService,
                protected Notify: SnotifyService) {
        // customize default values of carousels used by this component tree
        config.interval = 5000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = true;
        config.showNavigationArrows = this.showNavigationArrows;
        config.showNavigationIndicators = this.showNavigationIndicators;
        this.getSlides();
        firebase.initializeApp(this.firebaseConfig);
    }

    getSlides() {
        this.sliderService.get().subscribe(
            (data) => {
                //get images from server, show in carousel, hide canvas
                // if(data.length > 0) {
                    this.Notify.success("got " + data.length + " images");
                    if(this.exampleImgPresented == true) {
                        this.images.length = 0;
                        this.exampleImgPresented = false;
                    }
                    let imagesList = [];
                    data.forEach((slide) => {
                        imagesList.push(slide.image_url);
                    });
                    // this.imgInCanvas = false;
                if (this.context) {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                }
                    this.images = imagesList;
                // } else {
                //     this.exampleImgPresented = true;
                //     this.Notify.success("no images -> display example");
                //     this.images = this.exampleImages;
                // }
            },
            (error) => {
                console.log("failed to reach database");
                console.log(error);
            });
    }

    uploadToDB() {
        this.sliderService.update(this.slide).subscribe((data) => {
            this.Notify.success('Updated');
            console.log("uploaded to db");
            this.getSlides();
        }, (error) => {
            console.log("couldn't reach api to update db");
            console.log(error);
        })
    }

    onUpload() {
        let uploader = <HTMLInputElement>document.getElementById('uploader');
        console.log("lets see our image object");
        console.log(this.selectedFile);
        this.slide.file_name = this.selectedFile.name;
        let storageRef = firebase.storage().ref('postImages/' + this.selectedFile.name);
        let task = storageRef.put(this.selectedFile);

        task.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot: firebase.storage.UploadTaskSnapshot) => {
                uploader.value = String((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            },
            (error) => {
                console.log("firebase upload failed");
                console.log(error);
            },
            () => {
                console.log("img in firebase");
                this.Notify.success("Image in firebase storage");
                console.log(this.selectedFile);
                storageRef.getDownloadURL().then((url) => {
                    this.slide.image_url = url;
                    this.uploadToDB();
                    console.log("got url! uploading to db");
                    console.log(this.slide.image_url);
                },(error) => {
                    console.log("coudn't get URL");
                });
            });
    }



    /* make canvas negative */
    negatyw() {
        var url = URL.createObjectURL(this.selectedFile);
        console.log('URL');
        console.log(url);
        // var img = this.selectedFile; ???
        var img = new Image();
        img.onload = () => {
            this.context.drawImage(img, 900, 500);
        };
        img.src = url;

// read the width and height of the canvas
        var width = this.canvas.width;
        var height = this.canvas.height;

// create a new pixel array
        var imageData;
        try
        {
            imageData = this.context.getImageData(0, 0, width, height) as HTMLImageElement;
        } catch(e)
        {
            // netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
            // imageData = this.context.getImageData(0, 0, width, height);
            this.Notify.error('no image loaded');
            console.log("no image to operate on");
            console.log(e);
        }

// make nagative
        for (var i=0; i<height; i++)
        for (var j = 0; j < width; j++) {
            var index = (i * width + j) * 4;
// invert pixel
            imageData.data[index + 3] = 255;
            imageData.data[index] = 255 - imageData.data[index];
            imageData.data[index + 1] = 255 - imageData.data[index + 1];
            imageData.data[index + 2] = 255 - imageData.data[index + 2];
        }

// copy the image data back onto the canvas
        this.context.putImageData(imageData, 0, 0);
        // imageData.name = this.selectedFile.name;
        // this.selectedFile = imageData;
        // console.log("imageData");
        // console.log(imageData);

        // let image = new Image();
        // image.src = this.canvas.toDataURL();
        // image.name = this.selectedFile.name;
        // this.selectedFile = image;

        // this.canvas.toBlob((blob) => {
        //     let newImg = document.createElement('img'),
        //         url = URL.createObjectURL(blob);
        //
        //     newImg.onload = function() {
        //         // no longer need to read the blob so it's revoked
        //         URL.revokeObjectURL(url);
        //     };
        //
        //     newImg.src = url;
        //     document.body.appendChild(newImg);
        // });

        console.log("selectedfile after toDataURL");
        console.log(this.selectedFile);
    }

    /* load image pointed by param_file to canvas */
    loadImage(event) {
        // this.imgInCanvas = true;    //Loaded image visible on page
        this.selectedFile = <HTMLImageElement>event.target.files[0];
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        console.log("loadImage context");
        console.log(this.context);

// load file into canvas
        var img = new Image();
        img.src = URL.createObjectURL(this.selectedFile);
        console.log("onload selectedFile URL");
        console.log(img.src);
        img.onload = () => {
            var width = img.width;
            var height = img.height;
            this.canvas.width = width;
            this.canvas.height = height;
            this.context.drawImage(img,0,0);
// replace transparent with white
            var imageData;
            try
            {
                imageData = this.context.getImageData(0, 0, width, height);
            } catch(e)
            {
                console.log('getImageData from context failed');
            }
            for (var i=0; i<height; i++)
            {
                for (var j=0; j<width; j++)
                {
                    let index = (i*width+j)*4;
                    if (imageData.data[index+3] == 0)
                    {
                        imageData.data[index+3] = 255;
                        imageData.data[index] = 255;
                        imageData.data[index+1] = 255;
                        imageData.data[index+2] = 255;
                    }
                }
            }
            this.context.putImageData(imageData, 0, 0);
            console.log("imgData");
            console.log(imageData);

            console.log("selectedfile onload");
            console.log(this.selectedFile);
        }

        console.log("selectedfile before negative");
        console.log(this.selectedFile);
    }

    handleError(err) {
        this.error = err.error;
        this.Notify.error(err);
    }
}