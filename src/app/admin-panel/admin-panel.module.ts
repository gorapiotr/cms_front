import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import {NavComponent} from '../shared/nav/nav.component';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {FooterComponent} from '../shared/footer/footer.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,

  ],
  declarations: [
      AdminPanelComponent,
      NavComponent,
      SidebarComponent,
      FooterComponent
      ]
})
export class AdminPanelModule { }
