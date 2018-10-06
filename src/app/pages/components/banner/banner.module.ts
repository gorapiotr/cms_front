import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner.component';
import { RouterModule } from '@angular/router';
import {SettingPipeModule} from '../../../shared/class/pipe/setting.pipe.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SettingPipeModule
    ],
    declarations: [BannerComponent],
    exports: [BannerComponent]
})
export class BannerModule {
}
