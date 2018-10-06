import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {SimpleLoaderModule} from '../simple-loader/simple-loader.module';
import {AdminPanelRoutingModule} from '../../admin-panel/admin-panel-routing.module';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
    imports: [
        CommonModule,
        SimpleLoaderModule,
        AdminPanelRoutingModule,
        NgxPermissionsModule.forChild()
    ],
    declarations: [SidebarComponent],
    exports: [SidebarComponent]
})
export class SidebarModule {
}
