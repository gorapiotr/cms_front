import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user/user.service';
import {User} from '../../../_models/User';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    public user: User;
    public userPermissions;
    hideLoader = false;

    constructor(
        private userService: UserService,
        private permissionsService: NgxPermissionsService,
    ) { }

    ngOnInit() {
        this.userService.getUserData().subscribe(
            (data) => this.user = data,
            (error) => console.log(error),
            () => {
                this.userPermissions = this.permissionsService.getPermissions();
                this.hideLoader = true;
            });
    }

    objectKeys(obj) {
        return Object.keys(obj);
    }
}
