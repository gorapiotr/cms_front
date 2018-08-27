import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var $: any;

import {User} from '../../_models/User';
import {UserService} from '../../_services/user/user.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public user: User;

  constructor(private userService: UserService
  ) { }

  ngOnInit() {
      this.userService.getUserData().subscribe(data => this.user = data);
  }

  ngAfterViewInit() {
  $(function () {
      // Close other submenu in sidebar on opening any
        const sidebar = $('.sidebar');
        sidebar.on('show.bs.collapse', '.collapse', function () {
            sidebar.find('.collapse.show').collapse('hide');
        });
    });
  }
}
