import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import {LoaderModule} from '../../../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {SettingPipeModule} from '../../../../shared/class/pipe/setting.pipe.module';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      LoaderModule,
      SettingPipeModule,

  ],
  declarations: [MenuItemComponent],
  exports:[MenuItemComponent]
})
export class MenuItemModule { }
