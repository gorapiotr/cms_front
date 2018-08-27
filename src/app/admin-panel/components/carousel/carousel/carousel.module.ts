import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AfterLoginService} from '../../../../_services/after-login/after-login.service';
import {RouterModule, Routes} from '@angular/router';
import {CarouselComponent} from './carousel.component';
import {CarouselService} from '../../../../_services/carousel/carousel.service';
import {FormsModule} from '@angular/forms';
import {InlineEditorModule} from '../../../../../assets/js/@qontu/ngx-inline-editor';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {UploadService} from '../../../../_services/upload/upload.service';
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
    InlineEditorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    LoaderModule
  ],
  providers: [
    CarouselService,
    UploadService
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselModule { }
