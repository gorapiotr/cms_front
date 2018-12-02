import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu-component',
    templateUrl: './menu-component.component.html',
    styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {


    menuItems = [{
        name: 'home_menu_item',
        slug: 'home_menu_item_slug',
        active: 'active_home_menu_item',
        title: 'Home'
    }, {
        name: 'about_menu_item',
        slug: 'about_menu_item_slug',
        active: 'active_about_menu_item',
        title: 'About'
    },{
        name: 'contact_menu_item',
        slug: 'contact_menu_item_slug',
        active: 'active_contact_menu_item',
        title: 'Contact'
    }];

    ngOnInit() {

    }

    constructor() {

    }

}
