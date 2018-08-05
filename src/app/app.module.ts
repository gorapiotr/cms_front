import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import {AuthService} from './services/auth.service';
import {AfterLoginService} from './services/after-login.service';
import {BeforeLoginService} from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {LoginModule} from './login/login.module';
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {SignupModule} from './signup/signup.module';
import {PasswordModule} from './password/password.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    AdminPanelModule,
    SignupModule,
    PasswordModule,
    SnotifyModule
  ],
  providers: [
      JarwisService,
      TokenService,
      AuthService,
      AfterLoginService,
      BeforeLoginService,
      { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
      SnotifyService],
  bootstrap: [
      AppComponent]
})
export class AppModule { }
