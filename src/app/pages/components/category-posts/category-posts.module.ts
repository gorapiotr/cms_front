import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPostsComponent } from './category-posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryPostsComponent],
  exports: [CategoryPostsComponent]
})
export class CategoryPostsModule { }
