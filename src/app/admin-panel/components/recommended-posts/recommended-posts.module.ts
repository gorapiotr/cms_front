import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedPostsComponent } from './recommended-posts.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';

const routes: Routes = [{
    path: '',
    component: RecommendedPostsComponent,
    canActivate: [AfterLoginService]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        LoaderModule,
  ],
  declarations: [RecommendedPostsComponent]
})
export class RecommendedPostsModule { }
