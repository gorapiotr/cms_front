import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from './post-page.component';
import {CategoryPostsModule} from '../components/category-posts/category-posts.module';
import {RecommendedPostsModule} from '../components/recommended-posts/recommended-posts.module';
import {FooterModule} from '../components/footer/footer.module';
import {RouterModule, Routes} from '@angular/router';
import {RightSideBarModule} from '../components/right-side-bar/right-side-bar.module';
import {LoaderModule} from '../../shared/loader/loader.module';
import {BannerModule} from '../components/banner/banner.module';
import {PostContentModule} from './post-content/post-content.module';

const routes: Routes = [{
    path: '',
    component: PostPageComponent
}];

@NgModule({
    imports: [
        CommonModule,
        CategoryPostsModule,
        RouterModule.forChild(routes),
        LoaderModule,
        BannerModule,
        RecommendedPostsModule,
        CategoryPostsModule,
        RightSideBarModule,
        FooterModule,
        PostContentModule
    ],
  declarations: [PostPageComponent]
})
export class PostPageModule { }
