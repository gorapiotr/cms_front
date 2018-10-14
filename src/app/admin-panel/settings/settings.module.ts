import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings.component';
import {AfterLoginService} from '../../_services/after-login/after-login.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoaderModule} from '../../shared/loader/loader.module';
import {SettingPipeModule} from '../../shared/class/pipe/setting.pipe.module';
import {SettingsService} from '../../_services/admin-panel/settings/settings.service';

const routes: Routes = [{
    path: '',
    component: SettingsComponent,
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
        SettingsComponent,
    ],
    exports: [SettingsComponent]
})
export class SettingsModule {
}
