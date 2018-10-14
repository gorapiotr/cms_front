import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostService} from '../../../_services/post/post.service';
import {Post} from '../../../_models/Post/Post';
import {SnotifyService} from 'ng-snotify';

@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

    hideLoader = false;
    model: Post;
    hideUpdateUserLoader = true;

    constructor(protected route: ActivatedRoute,
                protected postService: PostService,
                protected Notify: SnotifyService) {
    }

    ngOnInit() {
        this.getPost();
    }

    getPost() {
        this.hideLoader = false;
        this.route.params.subscribe((params: Params) => {
            this.postService.get(params.postId).subscribe((data) => {
                this.model = data.data;
                console.log(this.model);
                this.hideLoader = true;
            });
        });
    }

    /**
     * todo
     *
     * created service for error display
     */
    update() {
        this.hideUpdateUserLoader = false;
        console.log(this.model);
        this.postService.update(this.model).subscribe((data) => {
            this.getPost();
            this.hideUpdateUserLoader = true;
            this.Notify.success('Updated');
        }, (error) => {
                const err = this.objectValues(error.errors);
                err.forEach( (x) => {
                    this.Notify.error(x as string);
                });
            this.hideUpdateUserLoader = true;
        });
    }

    onFileChanged(event) {
        this.model.main_image_file = event.target.files[0];
    }

    objectValues(obj) {
        return Object.values(obj);
    }

    leadOptions: Object = {
        charCounterCount: true,
        toolbarButtons: [],
        toolbarButtonsXS: [],
        toolbarButtonsSM: [],
        toolbarButtonsMD: [],
    };
}


