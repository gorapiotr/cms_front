import {SettingsPipe} from './settings.pipe';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [SettingsPipe],
    exports: [SettingsPipe]
})
export class SettingPipeModule {
}
