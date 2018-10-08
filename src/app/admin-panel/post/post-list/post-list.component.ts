import {Component, OnInit} from '@angular/core';
import {Post} from '../../../_models/Post/Post';
import {PostService} from '../../../_services/post/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: Array<Post>;
    hideLoader = false;
    hidePaginationLoader = false;

    pagination = {
        page: 1,
        total: 0,
        size: 10
    };

    constructor(protected postService: PostService) {
    }

    ngOnInit() {
        this.getPages(1);
    }

    getPages(page: any) {
        this.hidePaginationLoader = false;
        this.postService.getPage(page).subscribe(
            (data) => {
                this.posts = data;
                console.log(this.posts);
                this.pagination.total = this.postService.meta.total;
                this.pagination.size = this.postService.meta.per_page;
                this.pagination.page = this.postService.meta.current_page;

            },
            (error) => console.log(error),
            () => {
                this.hideLoader = true;
                this.hidePaginationLoader = true;
            }
        );
    }

    pageChange() {
        this.getPages(this.pagination.page);
    }

    arrayOne(n: number): any[] {
        return Array(n);
    }

}
