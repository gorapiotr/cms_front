import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFilterComponent } from './image-filter.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../../_services/after-login/after-login.service';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [{
    path: '',
    component: ImageFilterComponent,
    canActivate: [ AfterLoginService ]
}];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      FormsModule,
      LoaderModule
  ],
  declarations: [ImageFilterComponent]
})
export class ImageFilterModule { }
