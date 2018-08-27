import { Component, OnInit } from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {LoginService} from '../../_services/login/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-request-reset',
    templateUrl: './request-reset.component.html',
    styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

    public form = {
        email: null
    };

    constructor(private route: ActivatedRoute,
                private Login: LoginService,
                private router: Router,
                private Notify: SnotifyService) { }

    ngOnInit() {
    }

    onSubmit() {
        this.Login.sendPasswordResetLink(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }
    handleResponse(data) {
        this.Notify.success(data.data);
        this.form.email = null;
    }

    handleError(error) {
        this.Notify.error(error.error.error);
    }



}