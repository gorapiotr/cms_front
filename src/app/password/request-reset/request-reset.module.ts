import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RequestResetComponent} from './request-reset.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [{
    path: '',
    component: RequestResetComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [RequestResetComponent]
})
export class RequestResetModule { }
