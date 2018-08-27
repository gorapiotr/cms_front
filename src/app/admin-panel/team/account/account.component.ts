import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../../../_services/user/user.service';
import {User} from '../../../_models/User/User';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit,AfterViewInit {

    public user: User;
    public userPermissions;
    hideLoader = false;

    constructor(
        private userService: UserService,
        private permissionsService: NgxPermissionsService,
    ) { }

    ngAfterViewInit() {
        this.userService.getUserData().subscribe(
            (data) => this.user = data,
            (error) => console.log(error),
            () => {
                this.permissionsService.permissions$.subscribe((permissions) => {
                    this.userPermissions = permissions;
                    this.hideLoader = true;
                });
            });
    }

    ngOnInit() {
    }

    objectKeys(obj) {
        return Object.keys(obj);
    }
}
