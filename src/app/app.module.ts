import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginService} from './_services/login/login.service';
import {TokenService} from './_services/token/token.service';
import {AuthService} from './_services/auth/auth.service';
import {AfterLoginService} from './_services/after-login/after-login.service';
import {BeforeLoginService} from './_services/before-login/before-login.service';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {LoginModule} from './login/login.module';
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {SignupModule} from './signup/signup.module';
import {PasswordModule} from './password/password.module';
import {MainInterceptor} from './interceptors/main.interceptor';
import {NgxPermissionsModule} from 'ngx-permissions';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        // BrowserModule,
        NoopAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        LoginModule,
        AdminPanelModule,
        SignupModule,
        PasswordModule,
        SnotifyModule,
        NgxPermissionsModule.forRoot()
    ],
    providers: [
        LoginService,
        TokenService,
        AuthService,
        AfterLoginService,
        BeforeLoginService,
        {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService,
        {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}
    ],
    bootstrap: [
        AppComponent]
})
export class AppModule {
}
