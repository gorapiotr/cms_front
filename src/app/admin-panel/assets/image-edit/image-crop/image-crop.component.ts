import {Component, OnInit} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper/src/image-cropper.component';

@Component({
    selector: 'app-image-crop',
    templateUrl: './image-crop.component.html',
    styleUrls: ['./image-crop.component.css']
})
export class ImageCropComponent implements OnInit {

    ngOnInit() {

    }

    constructor() {

    }

    imageChangedEvent: any = '';
    croppedImage: any = '';
    cropperReady = false;

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        this.cropperReady = true;
    }
    loadImageFailed () {
        console.log('Load failed');
    }

}
