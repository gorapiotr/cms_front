import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from "@angular/common/http";

const routes: Routes = [{
    path: '',
    component: SliderComponent
}];

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes),
        HttpClientModule
  ],
    declarations: [
      SliderComponent
  ],
    exports: [SliderComponent]
})
export class SliderModule { }
