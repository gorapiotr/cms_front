import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Slider } from "../../_models/Slider/Slider";
import { SnotifyService} from "ng-snotify";
import { SliderService } from '../../_services/slider/slider.service';
import { HttpClient } from "@angular/common/http";
import * as firebase from "firebase";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    providers: [NgbCarouselConfig]
})

export class SliderComponent {
    images: Array<string> = [];    //list of URLs for images stored in firebase storage
    canvas: HTMLCanvasElement;
    context;
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
                    if(this.exampleImgPresented == true) {
                        this.images.length = 0;
                        this.exampleImgPresented = false;
                    }
                    let imagesList = [];
                    data.forEach((slide) => {
                        imagesList.push(slide.image_url);
                    });
                if (this.context) {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                }
                    this.images = imagesList;
            },
            (error) => {
                this.Notify.error("database unreachable");
                console.log(error);
            });
    }

    uploadToDB() {
        this.sliderService.update(this.slide).subscribe((data) => {
            this.Notify.success('Update succeded');
            console.log("uploaded to db");
            this.getSlides();
        }, (error) => {
            console.log("couldn't reach api to update db");
            console.log(error);
        })
    }

    onUpload() {
        let uploader = <HTMLInputElement>document.getElementById('uploader');
        let storageRef = firebase.storage().ref('postImages/' + this.selectedFile.name);
        this.slide.file_name = this.selectedFile.name;
        this.canvas.toBlob((blob) => {
            let task = storageRef.put(blob);
            task.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: firebase.storage.UploadTaskSnapshot) => {
                    uploader.value = String((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                },
                (error) => {
                    console.log(error);
                    this.Notify.error("firebase upload failed");
                },
                () => {
                    console.log(this.selectedFile);
                    storageRef.getDownloadURL().then((url) => {
                        this.slide.image_url = url;
                        this.uploadToDB();
                    },(error) => {
                        console.log("coudn't get URL");
                        console.log(error);
                    });
                });
        });
    }

    /* load image pointed by param_file to canvas */
    loadImage(event) {
        this.selectedFile = <HTMLImageElement>event.target.files[0];
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");

// load file into canvas
        var img = new Image();
        img.src = URL.createObjectURL(this.selectedFile);
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
            } catch(error)
            {
                console.log('getImageData from context failed');
                console.log(error);
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
        };
    }

    /* make canvas negative */
    negatyw() {
        var url = URL.createObjectURL(this.selectedFile);
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
    }

    /* Convert image loaded into canvas to sepia */
    sepia(sepiaValue) {
        var url = URL.createObjectURL(this.selectedFile);
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
            this.Notify.error('no image loaded');
            console.log("no image to operate on");
            console.log(e);
        }
        let index;
        let val;
    // convert to sepia
        var newImageData = this.context.createImageData(width, height);
        for (var i=0; i<height; i++)
        {
            for (var j=0; j<width; j++)
            {
                index = (i*width+j)*4;
                val = 0.299*imageData.data[index+0] + 0.587*imageData.data[index+1] + 0.114*imageData.data[index+2];
                if (val + 2 * sepiaValue > 255)
                {
                    newImageData.data[index+0] = 255;
                }
                else
                {
                    newImageData.data[index+0] = val + 2 * sepiaValue;
                }
                if (val + sepiaValue > 255)
                {
                    newImageData.data[index+1] = 255;
                }
                else
                {
                    newImageData.data[index+1] = val + sepiaValue;
                }
                newImageData.data[index+2] = val;
                newImageData.data[index+3] = 255;
            }
        }

// copy the image data back onto the canvas
        this.context.putImageData(newImageData, 0, 0);
    }

    /* make solarization on loaded image */
    solarization() {
        let luminanceValue = Number((document.getElementById("param_luminancja") as HTMLInputElement).value);

        // var url = URL.createObjectURL(this.selectedFile);
        var img = new Image();
        img.onload = () => {
            this.context.drawImage(img, 900, 500);
        };
        // img.src = url;

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
            this.Notify.error('no image loaded');
            console.log("no image to operate on");
            console.log(e);
        }

// prepare LUT table
        let LUT: Array<number> = [];
        for (var i=0; i<luminanceValue; i++)
        {
            LUT[i] = i;
        }
        for (var i=luminanceValue; i<256; i++)
        {
            LUT[i] = 255-i;
        }
// show LUT table
        this.showLUT(LUT);

        let index;
// make solarization
        var newImageData = this.context.createImageData(width, height);
        for (var i=0; i<height; i++)
        {
            for (var j=0; j<width; j++)
            {
                index = (i*width+j)*4;
                newImageData.data[index+3] = 255;
                newImageData.data[index+0] = LUT[imageData.data[index+0]];
                newImageData.data[index+1] = LUT[imageData.data[index+1]];
                newImageData.data[index+2] = LUT[imageData.data[index+2]];
            }
        }

// copy the image data back onto the canvas
        this.context.putImageData(newImageData, 0, 0);
    }

    /* draw chart with LUT values */
    showLUT(LUT) {
        var lutCanvas = <HTMLCanvasElement>document.getElementById("lut_canvas");
// clear previous
        lutCanvas.width = lutCanvas.width;
        var lutCtx = lutCanvas.getContext("2d");
// draw texts
        lutCtx.font = "10pt Arial";
        lutCtx.fillStyle = "black";
        lutCtx.textBaseline = "top";
        lutCtx.textAlign = "center";
        lutCtx.fillText("LUT", 65, 10);
        lutCtx.font = "8pt Arial";
        lutCtx.fillText("0", 8, 120);
        lutCtx.fillText("255", 8, 0);
        lutCtx.fillText("0", 25, 140);
        lutCtx.fillText("255", 135, 140);
// draw vertical arrow
        lutCtx.moveTo(20, 130);
        lutCtx.lineTo(20, 0);
        lutCtx.lineTo(17, 5);
        lutCtx.lineTo(20, 0);
        lutCtx.lineTo(23, 5);
        lutCtx.stroke();
        lutCtx.moveTo(20, 130);
// draw horizontal arrow
        lutCtx.moveTo(20, 130);
        lutCtx.lineTo(150, 130);
        lutCtx.lineTo(145, 133);
        lutCtx.lineTo(150, 130);
        lutCtx.lineTo(145, 127);
        lutCtx.stroke();
// draw chart
        lutCtx.moveTo(20, 130);
        for (var i=0; i<256; i++)
        {
            lutCtx.lineTo(20+i/2, 130-LUT[i]/2);
        }
        lutCtx.stroke();
    }
}