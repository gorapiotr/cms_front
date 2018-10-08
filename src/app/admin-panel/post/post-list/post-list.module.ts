import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './post-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {PostService} from '../../../_services/post/post.service';

const routes: Routes = [{
    path: '',
    component: PostListComponent,
    canActivate: [AfterLoginService]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LoaderModule,
        NgbPaginationModule
    ],
    providers: [PostService],
    declarations: [PostListComponent],
    exports: [PostListComponent]
})
export class PostListModule {
}
