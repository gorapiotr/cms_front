import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DialogComponent } from './dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from "@angular/material";
import {FormsModule} from "@angular/forms";

const routes: Routes = [{
  path: '',
  component: DialogComponent
}];

@NgModule({
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  imports: [
    CommonModule,
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
    DialogComponent,
  ],
  exports: [
    DialogComponent,
    MatFormFieldModule,
    MatButtonModule,
  ],
  entryComponents: [
    DialogComponent,
  ]
})
export class DialogModule { }
