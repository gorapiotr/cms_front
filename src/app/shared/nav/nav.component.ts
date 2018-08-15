import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../_services/token.service';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models/User';
import {deserializeSummaries} from '@angular/compiler/src/aot/summary_serializer';
import {MapUtils} from '../class/maputils';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    public loggedIn: boolean;
    public user: User;

    constructor(
        private Auth: AuthService,
        private router: Router,
        private Token: TokenService,
        private UserService: UserService
    ) { }

    ngOnInit() {
        this.Auth.authStatus.subscribe(value => this.loggedIn = value);
        this.UserService.getUserData().subscribe(
            data => this.user = data);
    }

    logout(event: MouseEvent) {
        event.preventDefault();

        this.Auth.changeAuthStatus(false);

        this.Token.remove();

        this.router.navigateByUrl('/login');
    }

}
