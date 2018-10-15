import { Component, OnInit } from '@angular/core';
import {Post} from '../../../_models/Post/Post';
import {PostService} from '../../../_services/admin-panel/post/post.service';
import {PostPageService} from '../../../_services/page/post/post-page.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: Array<Post>;
    hideLoader = false;
    hidePaginationLoader = false;

    pagination = {
        page: 1,
        total: 0,
        size: 10
    };

    constructor(protected postPageService: PostPageService) {
    }

    ngOnInit() {
        this.getPages(1);
    }

    getPages(page: any) {
        this.hidePaginationLoader = false;
        this.postPageService.getPage(page).subscribe(
            (data) => {
                this.posts = data;
                console.log(this.posts);
                this.pagination.total = this.postPageService.meta.total;
                this.pagination.size = this.postPageService.meta.per_page;
                this.pagination.page = this.postPageService.meta.current_page;

            },
            (error) => console.log(error),
            () => {
                this.hideLoader = true;
                this.hidePaginationLoader = true;
            }
        );
    }

}
