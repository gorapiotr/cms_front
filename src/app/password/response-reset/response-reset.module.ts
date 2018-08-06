import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseResetComponent } from './response-reset.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BeforeLoginService} from '../../_services/before-login.service';

const routes: Routes = [{
    path: '',
    component: ResponseResetComponent,
    canActivate: [ BeforeLoginService ]
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [ResponseResetComponent]
})
export class ResponseResetModule { }
