import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountComponent} from './account.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../_services/after-login.service';

const routes: Routes = [{
    path: '',
    component: AccountComponent,
    canActivate: [ AfterLoginService ]
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AccountComponent],
  exports: [AccountComponent]
})
export class AccountModule { }
