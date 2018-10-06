import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {AdminPanelComponent} from './admin-panel.component';
import {NgxPermissionsModule} from 'ngx-permissions';
import {NavModule} from '../shared/nav/nav.module';
import {SidebarModule} from '../shared/sidebar/sidebar.module';
import {FooterModule} from '../shared/footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        AdminPanelRoutingModule,
        NgxPermissionsModule.forChild(),
        NavModule,
        SidebarModule,
        FooterModule
    ],
    declarations: [
        AdminPanelComponent,
    ]
})
export class AdminPanelModule {
}
