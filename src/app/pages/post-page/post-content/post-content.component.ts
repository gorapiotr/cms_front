import { Component, OnInit } from '@angular/core';
import {Post} from '../../../_models/Post/Post';
import {ActivatedRoute, Params} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {PostPageService} from '../../../_services/page/post/post-page.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

    hideLoader = false;
    model: Post;
    hideUpdateUserLoader = true;

    constructor(protected route: ActivatedRoute,
                protected postPageService: PostPageService,
                protected Notify: SnotifyService) {
    }

    ngOnInit() {
        this.getPost();
    }

    getPost() {
        this.hideLoader = false;
        this.route.params.subscribe((params: Params) => {
            this.postPageService.get(params.slug).subscribe((data) => {
                this.model = data.data;
                console.log(this.model);
                this.hideLoader = true;
            });
        });
    }

}
