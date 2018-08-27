import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth/auth.service';
import {LoginService} from '../_services/login/login.service';
import {Router} from '@angular/router';
import {TokenService} from '../_services/token/token.service';
import {SnotifyService} from 'ng-snotify';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
        email: null,
        password: null
    };

    public error = null;

    constructor(
        private Login: LoginService,
        private Token: TokenService,
        private router: Router,
        private Auth: AuthService,
        private Notify: SnotifyService,
        private permissionsService: NgxPermissionsService,
    ) { }

    onSubmit() {
        this.Login.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error));
    }

    handleResponse(data) {
        this.Token.handle(data.access_token);
        this.Auth.changeAuthStatus(true);
        this.permissionsService.loadPermissions(data.data.permissions);
        this.Notify.success('Succesful login!');
        this.router.navigateByUrl('/admin');
    }

    handleError(error) {
        this.error = error.error;

        this.Notify.error(this.error);

        this.router.navigateByUrl('/login');
    }
    ngOnInit() {
    }

}
