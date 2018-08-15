import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import {AfterLoginService} from '../../_services/after-login.service';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from '../team/account/account.component';

const routes: Routes = [{
    path: '',
    component: SettingsComponent,
    canActivate: [ AfterLoginService ]
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SettingsComponent],
  exports: [SettingsComponent]
})
export class SettingsModule { }
