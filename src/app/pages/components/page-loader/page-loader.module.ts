import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './page-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageLoaderComponent],
    exports: [PageLoaderComponent]
})
export class PageLoaderModule { }
