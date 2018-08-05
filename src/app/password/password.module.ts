import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';

@NgModule({
  imports: [
    CommonModule,
    PasswordRoutingModule,
  ],
  declarations: [PasswordComponent]
})
export class PasswordModule { }
