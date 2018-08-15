import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../../_services/after-login.service';
import {CarouselListComponent} from './carousel-list.component';
import {CarouselGroupService} from '../../../../_services/carousel/carousel-group.service';

const routes: Routes = [{
    path: '',
    component: CarouselListComponent,
    canActivate: [ AfterLoginService ]
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    CarouselGroupService
  ],
  declarations: [CarouselListComponent],
  exports: [CarouselListComponent]
})
export class CarouselListModule { }
