import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RequestResetComponent} from './request-reset.component';
import {FormsModule} from '@angular/forms';
import {BeforeLoginService} from '../../services/before-login.service';

const routes: Routes = [{
    path: '',
    component: RequestResetComponent,
    canActivate: [ BeforeLoginService ]
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
