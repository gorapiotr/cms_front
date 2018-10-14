import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostViewComponent} from './post-view.component';
import {PostService} from '../../../_services/admin-panel/post/post.service';
import {RouterModule, Routes} from '@angular/router';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {FroalaEditorModule} from 'angular-froala-wysiwyg';
import {FormsModule} from '@angular/forms';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';

const routes: Routes = [{
    path: '',
    component: PostViewComponent,
    canActivate: [AfterLoginService],
    data: {
        permissions: {
            only: ['read-post']
        }
    }
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        LoaderModule,
        FroalaEditorModule
    ],
    providers: [PostService],
    declarations: [PostViewComponent]
})
export class PostViewModule {
}
