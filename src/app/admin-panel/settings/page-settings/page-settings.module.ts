import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSettingsComponent } from './page-settings.component';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {SettingPipeModule} from '../../../shared/class/pipe/setting.pipe.module';
import {SettingsService} from '../../../_services/admin-panel/settings/settings.service';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {BooleanPipeModule} from '../../../shared/class/pipe/boolean.pipe.module';

const routes: Routes = [{
    path: '',
    component: PageSettingsComponent,
    canActivate: [AfterLoginService]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        LoaderModule,
        SettingPipeModule,
        BooleanPipeModule,
        NgbTabsetModule
    ],
    providers: [
        SettingsService
    ],
    declarations: [
        PageSettingsComponent,
    ],
    exports: [PageSettingsComponent]
})
export class PageSettingsModule { }
