import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderComponent, SliderDialog} from './slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import {
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MAT_DIALOG_DEFAULT_OPTIONS
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [{
    path: '',
    component: SliderComponent
}];

@NgModule({
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    imports: [
        CommonModule,
        // BrowserAnimationsModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes),
        HttpClientModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
    ],
    declarations: [
        SliderComponent,
        SliderDialog
    ],
    exports: [
        SliderComponent,
        // SliderDialog,
        MatFormFieldModule,
        MatButtonModule,
        // BrowserAnimationsModule,
        // NoopAnimationsModule,
    ],
    entryComponents: [
        SliderDialog,
    ]
})
export class SliderModule { }
