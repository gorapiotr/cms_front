import { Component, OnInit } from '@angular/core';
import {Post} from '../../../_models/Post/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../_services/admin-panel/post/post.service';
import {SnotifyService} from 'ng-snotify';
import {ImageCroppedEvent} from 'ngx-image-cropper/src/image-cropper.component';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

    hideLoader = false;
    model: Post;
    hidePostAddLoader = true;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    cropperReady = false;


    constructor(protected route: ActivatedRoute,
                protected postService: PostService,
                protected Notify: SnotifyService,
                private router: Router) {
    }

    ngOnInit() {
      this.hideLoader = true;
      this.model = new Post();
    }

    create() {
        this.hidePostAddLoader = false;
        this.postService.create(this.model).subscribe((data) => {
            this.hidePostAddLoader = true;
            this.Notify.success('Updated');
            this.router.navigate(['/admin/post/' + data.data.id + '/edit']);
        }, (error) => {
            const err = this.objectValues(error.errors);
            err.forEach( (x) => {
                this.Notify.error(x as string);
            });
            this.hidePostAddLoader = true;
        });
    }

    objectValues(obj) {
        return Object.values(obj);
    }

    leadOptions: Object = {
        charCounterCount: true,
        toolbarButtons: ['bold'],
        toolbarButtonsXS: ['bold'],
        toolbarButtonsSM: ['bold'],
        toolbarButtonsMD: ['bold'],
    };

    onFileChanged(event) {
        this.imageChangedEvent = event;
        this.model.main_image_file = event.target.files[0];
        this.cropperReady = true;
    }

    imageCropped(event: ImageCroppedEvent) {

        const file = new File([event.file], 'image');
        this.croppedImage = event.base64;
        this.model.main_image_file = file;
    }

    imageLoaded() {
        this.cropperReady = true;
    }

    loadImageFailed() {
        console.log('Load failed');
    }
}
