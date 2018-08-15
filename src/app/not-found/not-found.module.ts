import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found.component';
import {NotFoundRoutingModule} from './not-found-routing.module';

@NgModule({
  imports: [
    RouterModule,
    NotFoundRoutingModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
