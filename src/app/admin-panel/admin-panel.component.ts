import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user/user.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {PermissionService} from '../_services/permission/permission.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(
      private permissionsService: NgxPermissionsService,
      private permission: PermissionService,
      private userService: UserService
  ) { }

  ngOnInit() {
      this.userService.getUserData().subscribe( (data) => {
          this.permission.getPermissions(data.id).subscribe( (permission) => {
            this.permissionsService.loadPermissions(permission.permissions);
            //console.log(this.permissionsService.getPermissions());
          });
      });
  }
}
