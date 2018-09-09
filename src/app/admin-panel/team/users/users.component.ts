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
  hidePaginationLoader = false;

  pagination = {
      page: 1,
      total: 0,
      size: 10
  };


  constructor(protected userService: UserService) { }

  ngOnInit() {
      this.getUsers(1);
  }

  getUsers(page: any) {
      this.hidePaginationLoader = false;
      this.userService.getPage(page).subscribe(
          (data) => {
              this.users = data;
              this.pagination.total = this.userService.meta.total;
              this.pagination.size = this.userService.meta.per_page;
              this.pagination.page = this.userService.meta.current_page;

          },
          (error) => console.log(error),
          () => {
              this.hideLoader = true;
              this.hidePaginationLoader = true;
          }
      );
  }

    pageChange() {
        this.getUsers(this.pagination.page);
    }
}
