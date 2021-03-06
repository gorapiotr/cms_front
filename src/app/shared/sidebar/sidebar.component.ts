import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

import {User} from '../../_models/User/User';
import {UserService} from '../../_services/user/user.service';
import {NgxPermissionsService} from 'ngx-permissions';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

    public user: User;
    hideLoader = false;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.hideLoader = false;
        this.userService.getUserData().subscribe((data) => {
            this.user = data;
            this.hideLoader = true;
        });
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
