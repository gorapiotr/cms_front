import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostAddComponent} from './post-add.component';
import {RouterModule, Routes} from '@angular/router';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {FroalaEditorModule} from 'angular-froala-wysiwyg';
import {FormsModule} from '@angular/forms';
import {PostService} from '../../../_services/admin-panel/post/post.service';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {ImageCropperModule} from 'ngx-image-cropper';

const routes: Routes = [{
    path: '',
    component: PostAddComponent,
    canActivate: [AfterLoginService],
    data: {
        permissions: {
            only: ['create-post']
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
    declarations: [PostAddComponent]
})
export class PostAddModule {
}
