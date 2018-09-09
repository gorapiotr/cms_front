import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {UserService} from '../../../_services/user/user.service';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{
    path: '',
    component: UsersComponent,
    canActivate: [ AfterLoginService ]
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    NgbPaginationModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [UserService]
})
export class UsersModule { }
