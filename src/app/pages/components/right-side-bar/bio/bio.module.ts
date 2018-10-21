import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BioComponent} from './bio.component';
import {SettingsPageService} from '../../../../_services/page/settings/settings-page.service';
import {SettingPipeModule} from '../../../../shared/class/pipe/setting.pipe.module';

@NgModule({
    imports: [
        CommonModule,
        SettingPipeModule
    ],
    providers: [
        SettingsPageService
    ],
    declarations: [BioComponent],
    exports: [BioComponent]
})
export class BioModule {
}
