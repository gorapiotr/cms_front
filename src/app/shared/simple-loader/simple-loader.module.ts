import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleLoaderComponent} from './simple-loader.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SimpleLoaderComponent],
    exports: [SimpleLoaderComponent]
})
export class SimpleLoaderModule {
}
