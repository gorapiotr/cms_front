import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RightSideBarComponent} from './right-side-bar.component';
import {BioModule} from './bio/bio.module';

@NgModule({
    imports: [
        CommonModule,
        BioModule
    ],
    declarations: [RightSideBarComponent],
    exports: [RightSideBarComponent]
})
export class RightSideBarModule {
}
