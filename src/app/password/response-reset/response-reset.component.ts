import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {LoginService} from '../../_services/login/login.service';

@Component({
    selector: 'app-response-reset',
    templateUrl: './response-reset.component.html',
    styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
    public error: any = [];
    public form: any = {
        email: null,
        password: null,
        password_confirmation: null,
        resetToken: null
    };

    constructor(private route: ActivatedRoute,
                private Login: LoginService,
                private router: Router,
                private Notify: SnotifyService) {
        route.queryParams.subscribe(params => {
            this.form.resetToken = params['token'];
        });
    }

    onSubmit() {
        this.Login.changePassword(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.Notify.success(data.data);
        this.router.navigateByUrl('/login');
    }

    handleError(error) {
        this.error = error.error.errors;
    }

    ngOnInit() {
    }

}