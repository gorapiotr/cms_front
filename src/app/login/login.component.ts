import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {JarwisService} from '../_services/jarwis.service';
import {Router} from '@angular/router';
import {TokenService} from '../_services/token.service';
import {SnotifyService} from 'ng-snotify';
import {UserService} from '../_services/user.service';

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
        private Jarwis: JarwisService,
        private Token: TokenService,
        private router: Router,
        private Auth: AuthService,
        private Notify: SnotifyService,
        private userService: UserService
    ) { }

    onSubmit() {
        this.Jarwis.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.Token.handle(data.access_token);

        this.Auth.changeAuthStatus(true);

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
