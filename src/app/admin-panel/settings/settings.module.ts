import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import {AfterLoginService} from '../../_services/after-login.service';
import {RouterModule, Routes} from '@angular/router';
import {SettingsPipe} from '../../shared/class/pipe/settings.pipe';
import {FormsModule} from '@angular/forms';
import {LoaderModule} from '../../shared/loader/loader.module';

const routes: Routes = [{
    path: '',
    component: SettingsComponent,
    canActivate: [ AfterLoginService ]
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    LoaderModule
  ],
  declarations: [
      SettingsComponent,
      SettingsPipe
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
