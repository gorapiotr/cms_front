import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {TokenService} from '../../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

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

    this.router.navigateByUrl('/login');
  }

}
