import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AfterLoginService} from '../../../../_services/after-login/after-login.service';
import {RouterModule, Routes} from '@angular/router';
import {CarouselComponent} from './carousel.component';
import {CarouselService} from '../../../../_services/carousel/carousel.service';
import {FormsModule} from '@angular/forms';
import {LoaderModule} from '../../../../shared/loader/loader.module';

const routes: Routes = [{
    path: '',
    component: CarouselComponent,
    canActivate: [ AfterLoginService ]
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    //InlineEditorModule,
    LoaderModule
  ],
  providers: [
    CarouselService
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselModule { }
