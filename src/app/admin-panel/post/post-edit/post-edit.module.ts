import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostEditComponent} from './post-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {PostService} from '../../../_services/post/post.service';
import {FroalaEditorModule} from 'angular-froala-wysiwyg';

const routes: Routes = [{
    path: '',
    component: PostEditComponent,
    canActivate: [AfterLoginService]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LoaderModule,
        FroalaEditorModule
    ],
    providers: [PostService],
    declarations: [PostEditComponent]
})
export class PostEditModule {
}
