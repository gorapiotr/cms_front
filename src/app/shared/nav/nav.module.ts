import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {SimpleLoaderModule} from '../simple-loader/simple-loader.module';

@NgModule({
    imports: [
        CommonModule,
        SimpleLoaderModule
    ],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class NavModule {
}
