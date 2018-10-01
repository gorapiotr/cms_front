import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactContentComponent} from './contact-content.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ContactContentComponent],
    exports: [ContactContentComponent]
})
export class ContactContentModule {
}
