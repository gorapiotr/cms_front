import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  imports: [
    RouterModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
