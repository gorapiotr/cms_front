import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            {path: '', loadChildren: './index-page/index-page.module#IndexPageModule'},
            {path: 'index', loadChildren: './index-page/index-page.module#IndexPageModule'},
            {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'},
            {path: 'contact', loadChildren: './contact-page/contact-page.module#ContactPageModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
