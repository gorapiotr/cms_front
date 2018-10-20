import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountComponent} from './account.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {ImageCropperModule} from 'ngx-image-cropper';

const routes: Routes = [{
    path: '',
    component: AccountComponent,
    canActivate: [AfterLoginService]
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ImageCropperModule,
        RouterModule.forChild(routes),
        LoaderModule
    ],
    declarations: [AccountComponent],
    exports: [AccountComponent]
})
export class AccountModule {
}
