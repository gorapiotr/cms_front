import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {LoaderModule} from '../shared/loader/loader.module';

@NgModule({
  imports: [
    RouterModule,
    PagesRoutingModule,
      LoaderModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
