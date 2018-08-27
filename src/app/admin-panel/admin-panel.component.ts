import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user/user.service';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(
      private permissionsService: NgxPermissionsService,
  ) { }

  ngOnInit() {
    console.log("AdminPanelComponent");
  }

}
