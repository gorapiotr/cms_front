import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostService} from '../../../_services/post/post.service';
import {Post} from '../../../_models/Post/Post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

    hideLoader = false;
    model: Post;

  constructor(
      protected route: ActivatedRoute,
      protected postService: PostService
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
      this.hideLoader = true;
      this.route.params.subscribe((params: Params) => {
        this.postService.get(params.postId).subscribe( (data) => {
          this.model = data.data;
          this.hideLoader = true;
        });
      });
  }
}


