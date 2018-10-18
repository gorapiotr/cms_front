import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../_services/token/token.service';
import {UserService} from '../../_services/admin-panel/user/user.service';
import {User} from '../../_models/User/User';
import {NgxPermissionsService} from 'ngx-permissions';
import {SettingsService} from '../../_services/admin-panel/settings/settings.service';
import {Setting} from '../../_models/Settings/Setting';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    public loggedIn: boolean;
    public user: User;
    hideLoader = false;
    settings: Array<Setting>;


    constructor(
        private Auth: AuthService,
        private router: Router,
        private Token: TokenService,
        private userService: UserService,
        private permissionsService: NgxPermissionsService,
        private settingsService: SettingsService
    ) { }

    ngOnInit() {
        this.hideLoader = false;
        this.Auth.authStatus.subscribe(value => this.loggedIn = value);
        this.userService.getUserData().subscribe(
            (data) => {
                this.user = data;
                this.hideLoader = true;
            });
        this.settingsService.getSettings().subscribe( (data) => {
                this.settings = data;
                console.log(this.settings);
        });
    }

    logout(event: MouseEvent) {
        event.preventDefault();

        this.Auth.changeAuthStatus(false);
        this.Token.remove();
        this.permissionsService.flushPermissions();
        this.router.navigateByUrl('/login');
    }

}
