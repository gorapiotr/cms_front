import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostEditComponent} from './post-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {PostService} from '../../../_services/admin-panel/post/post.service';
import {FroalaEditorModule} from 'angular-froala-wysiwyg';
import {FormsModule} from '@angular/forms';
import {ImageCropperModule} from 'ngx-image-cropper';

const routes: Routes = [{
    path: '',
    component: PostEditComponent,
    canActivate: [AfterLoginService],
    data: {
        permissions: {
            only: ['update-post']
        }
    }
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        LoaderModule,
        FroalaEditorModule,
        ImageCropperModule
    ],
    providers: [PostService],
    declarations: [PostEditComponent]
})
export class PostEditModule {
}
