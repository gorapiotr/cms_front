import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Slider } from "../../_models/Slider/Slider";
import { SnotifyService} from "ng-snotify";
import { SliderService } from '../../_services/slider/slider.service';
import { HttpClient } from "@angular/common/http";
import * as firebase from "firebase";
// import {url} from "inspector";
// import {reject} from "q";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    providers: [NgbCarouselConfig]
})

export class SliderComponent {
    // images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    images = [];    //list of URLs for firebase storage images
    showNavigationArrows = false;
    showNavigationIndicators = false;
    public error = null;
    hideLoader = false;
    selectedFile: File = null;
    // Initialize Firebase
    config = {
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
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
        firebase.initializeApp(this.config);
    }

    getSlides() {
        this.sliderService.get().subscribe(
            (data) => {
                //get a list of images urls from db (it should be downloaded only for specific user and his post)
                console.log("downloaded data");
                this.images = data;
            },
            (error) => {
                console.log("failed to reach database");
                console.log(error);
            });
    }

    handleError(error) {
        this.error = error.error;
        this.Notify.error(error);
    }

    onFileChanged(event) {
        // this.selectedFile = <File>event.target.files[0];
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
        this.slide.name = this.selectedFile.name;
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
                console.log(this.selectedFile);
                storageRef.getDownloadURL().then((url) => {
                    this.slide.url = url;
                    this.uploadToDB();
                    console.log("got url! uploading to db");
                    console.log(this.slide.url);
                },(error) => {
                    console.log("coudn't get URL");
                });
            });
    }
}