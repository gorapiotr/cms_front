import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    public loggedIn: boolean;

    constructor(
        private Auth: AuthService,
        private router: Router,
        private Token: TokenService
    ) { }

    ngOnInit() {
        this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    }

    logout(event: MouseEvent) {
        event.preventDefault();

        this.Auth.changeAuthStatus(false);

        this.Token.remove();

        this.router.navigateByUrl('/');
    }

}
