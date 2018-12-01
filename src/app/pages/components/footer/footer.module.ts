import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {SettingPipeModule} from '../../../shared/class/pipe/setting.pipe.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        SettingPipeModule,
        RouterModule
    ],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule {
}
