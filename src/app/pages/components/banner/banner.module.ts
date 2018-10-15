import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner.component';
import { RouterModule } from '@angular/router';
import {SettingPipeModule} from '../../../shared/class/pipe/setting.pipe.module';
import {SettingsPageService} from '../../../_services/page/settings/settings-page.service';
import {SimpleLoaderModule} from '../../../shared/simple-loader/simple-loader.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SettingPipeModule,
        SimpleLoaderModule
    ],
    providers:[
        SettingsPageService
    ],
    declarations: [BannerComponent],
    exports: [BannerComponent]
})
export class BannerModule {
}
