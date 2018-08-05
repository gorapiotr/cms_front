import { Component, OnInit } from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {JarwisService} from '../../services/jarwis.service';

@Component({
    selector: 'app-request-reset',
    templateUrl: './request-reset.component.html',
    styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

    public form = {
        email: null
    };

    constructor(private Jarwis: JarwisService,
                private notify: SnotifyService) { }

    ngOnInit() {
    }

    onSubmit() {
        this.Jarwis.sendPasswordResetLink(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }
    handleResponse(data) {
        this.notify.success(data.data);
        this.form.email = null;
    }

    handleError(error) {
        this.notify.error(error.error.error);
    }



}