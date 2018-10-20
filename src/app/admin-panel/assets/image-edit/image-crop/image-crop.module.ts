import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropComponent } from './image-crop.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../../_services/after-login/after-login.service';
import {ImageCropperModule} from 'ngx-image-cropper';


const routes: Routes = [{
    path: '',
    component: ImageCropComponent,
    canActivate: [ AfterLoginService ]
}];

@NgModule({
    imports: [
        CommonModule,
        ImageCropperModule,
        RouterModule.forChild(routes),
    ],
  declarations: [ImageCropComponent]
})
export class ImageCropModule { }
