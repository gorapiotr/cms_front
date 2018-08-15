import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if (this.Token.loggedIn() === true) {
            return this.Token.loggedIn();
        } else {
            this.router.navigateByUrl('/login');
            return this.Token.loggedIn();
        }
    }

    constructor(private Token: TokenService, private router: Router) { }
}
