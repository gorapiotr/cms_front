import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user.service';
import {User} from '../../../_models/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    public user: User;
    hideLoader = false;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUserData().subscribe(
            (data) => this.user = data,
            (error) => console.log(error),
            () => {
                this.hideLoader = true;
            });
    }

}
