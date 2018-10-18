import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {SimpleLoaderModule} from '../simple-loader/simple-loader.module';
import {SettingsService} from '../../_services/admin-panel/settings/settings.service';
import {SettingPipeModule} from '../class/pipe/setting.pipe.module';

@NgModule({
    imports: [
        CommonModule,
        SimpleLoaderModule,
        SettingPipeModule
    ],
    providers: [SettingsService],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class NavModule {
}
