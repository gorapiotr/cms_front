import {SettingsPipe} from './settings.pipe';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooleanPipe} from './boolean.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [BooleanPipe],
    exports: [BooleanPipe]
})
export class BooleanPipeModule {
}
