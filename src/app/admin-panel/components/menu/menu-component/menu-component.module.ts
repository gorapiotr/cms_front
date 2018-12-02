import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponentComponent} from './menu-component.component';
import {LoaderModule} from '../../../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SettingPipeModule} from '../../../../shared/class/pipe/setting.pipe.module';
import {AfterLoginService} from '../../../../_services/after-login/after-login.service';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {MenuItemModule} from '../menu-item/menu-item.module';

const routes: Routes = [{
    path: '',
    component: MenuComponentComponent,
    canActivate: [AfterLoginService]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        LoaderModule,
        MenuItemModule,
        NgbTabsetModule
    ],
    providers: [],
    declarations: [MenuComponentComponent],
    exports: [MenuComponentComponent]
})
export class MenuComponentModule {
}
