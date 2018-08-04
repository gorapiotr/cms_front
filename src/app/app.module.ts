import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/shared/nav-menu/nav-menu.component';

import { AppRoutingModule } from './/app-routing.module';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import {AuthService} from './services/auth.service';
import {AfterLoginService} from './services/after-login.service';
import {BeforeLoginService} from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {LoginComponent} from './components/admin-panel/user/login/login.component';
import {ProfileComponent} from './components/shared/panel/profile/profile.component';
import {SignupComponent} from './components/admin-panel/user/signup/signup.component';
import {RequestResetComponent} from './components/admin-panel/user/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/admin-panel/user/password/response-reset/response-reset.component';
import { SidebarComponent} from './components/shared/sidebar/sidebar.component';
import { PanelComponent } from './components/shared/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    SidebarComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
