import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user/user.service';
import {User} from '../../../_models/User/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  hideLoader = false;

  constructor(protected userService: UserService) { }

  ngOnInit() {
    this.userService.getPage(1).subscribe(
        (data) => this.users = data,
        (error) => console.log(error),
        () => {
            this.hideLoader = true;
        }
    );
  }

}
