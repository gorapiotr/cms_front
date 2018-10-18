import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelSettingsComponent } from './admin-panel-settings.component';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SettingPipeModule} from '../../../shared/class/pipe/setting.pipe.module';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {SettingsService} from '../../../_services/admin-panel/settings/settings.service';

const routes: Routes = [{
    path: '',
    component: AdminPanelSettingsComponent,
    canActivate: [AfterLoginService]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        LoaderModule,
        SettingPipeModule
    ],
    providers: [
        SettingsService
    ],
    declarations: [
        AdminPanelSettingsComponent,
    ],
    exports: [AdminPanelSettingsComponent]
})

export class AdminPanelSettingsModule { }