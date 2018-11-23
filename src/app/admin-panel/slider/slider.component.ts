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
    exampleImages = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    images: Array<string>;    //list of URLs for images stored in firebase storage
    exampleImgPresented = false;
    showNavigationArrows = true;
    showNavigationIndicators = true;
    public error = null;
    hideLoader = false;
    selectedFile: File = null;
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
                //get a list of Slider() objects from db
                if(data.length > 0) {
                    this.Notify.success("got " + data.length + " images");
                    if(this.exampleImgPresented == true) {
                        this.images.length = 0;
                        this.exampleImgPresented = false;
                    }
                    let imagesList = [];
                    data.forEach((slide) => {
                        imagesList.push(slide.image_url);
                    });
                    this.images = imagesList;
                } else {
                    this.exampleImgPresented = true;
                    this.Notify.success("no images -> display example");
                    this.images = this.exampleImages;
                }
            },
            (error) => {
                console.log("failed to reach database");
                console.log(error);
            });
    }

    handleError(err) {
        this.error = err.error;
        this.Notify.error(err);
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
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
}