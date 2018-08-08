import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {MapUtils} from '../class/maputils';
import {User} from '../../_models/User';
import {UserService} from '../../_services/user.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService
  ) { }

  ngOnInit() {
      this.userService.getUserData().subscribe(data => this.user = data);
  }

}
