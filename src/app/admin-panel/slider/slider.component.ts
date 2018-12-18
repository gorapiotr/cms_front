import { Component, Inject } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Slider } from '../../_models/Slider/Slider';
import { SnotifyService} from 'ng-snotify';
import { SliderService } from '../../_services/slider/slider.service';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from "./dialog/dialog.component";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    providers: [NgbCarouselConfig],
})

export class SliderComponent {
    images: Array<string> = [];    //list of URLs for images stored in firebase storage
    exampleImgPresented = false;
    showNavigationArrows = true;
    showNavigationIndicators = true;
    public error = null;
    hideLoader = false;
    firebaseConfig = {
        apiKey: 'AIzaSyBQ3Ch9knXozMSCz0QWUXtjyG22O_gP3Lk',
        authDomain: 'cmsproject-49632.firebaseapp.com',
        databaseURL: 'https://cmsproject-49632.firebaseio.com',
        projectId: 'cmsproject-49632',
        storageBucket: 'cmsproject-49632.appspot.com',
        messagingSenderId: '864662869534'
    };
    slide = new Slider();

    constructor(private http: HttpClient, config: NgbCarouselConfig, protected sliderService: SliderService,
                protected Notify: SnotifyService, public dialog: MatDialog) {
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

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {firebaseConf: this.firebaseConfig}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getSlides();
        })
    }

    getSlides() {
        this.sliderService.get().subscribe(
            (data) => {
                //get images from server, show in carousel
                    if(this.exampleImgPresented == true) {
                        this.images.length = 0;
                        this.exampleImgPresented = false;
                    }
                    let imagesList = [];
                    data.forEach((slide) => {
                        imagesList.push(slide.image_url);
                    });
                    this.images = imagesList;
            },
            (error) => {
                this.Notify.error('database unreachable');
                console.log(error);
            });
    }
}
