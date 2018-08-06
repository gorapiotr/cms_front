import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {MapUtils} from '../class/maputils';
import {User} from '../../_models/User';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    public user: User;

  constructor(private UserService: UserService) { }

  ngOnInit() {
      this.UserService.getUserData().subscribe(data => this.user = data);
  }

}
