import { Component, OnInit } from '@angular/core';
import {Post} from '../../../_models/Post/Post';
import {PostPageService} from '../../../_services/page/post/post-page.service';

@Component({
  selector: 'app-recommended-posts',
  templateUrl: './recommended-posts.component.html',
  styleUrls: ['./recommended-posts.component.css']
})
export class RecommendedPostsComponent implements OnInit {

    posts: Post[];
    hideLoader = false;

    constructor(protected postPageService: PostPageService) {
    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.hideLoader = false;
        this.postPageService.getCollection([5 ,2 ,6]).subscribe(
            (data) => {
                this.posts = data;
                console.log(this.posts);

            },
            (error) => console.log(error),
            () => {
                this.hideLoader = true;
            }
        );
    }

}
