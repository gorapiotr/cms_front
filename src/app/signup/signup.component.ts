import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {JarwisService} from '../services/jarwis.service';
import {TokenService} from '../services/token.service';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    public form  ={
        email: null,
        name: null,
        password: null,
        password_conformation: null
    };

    public error = [];

    constructor(private Jarwis: JarwisService,
                private Token: TokenService,
                private router: Router,
                private Auth: AuthService,
                private Notify: SnotifyService,
    ) { }

    onSubmit() {
        this.Jarwis.signup(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    ngOnInit() {
    }

    handleResponse(data) {
        this.Token.handle(data.access_token);

        this.Auth.changeAuthStatus(true);

        this.Notify.success('Account created!');

        this.router.navigateByUrl('/admin');
    }

    handleError(error) {
        this.error = error.error.errors;

        this.Notify.error('Something was wrong!');
    }

}
