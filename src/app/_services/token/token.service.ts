import { Injectable } from '@angular/core';
import {CmsService} from '../cms.service';

@Injectable()
export class TokenService extends CmsService{
    private iss = {
        login: this.tokenUrl + '/login',
        signup: this.tokenUrl + '/signup'
    };

    constructor() {
        super();
    }

    handle(token) {
        this.set(token);
    }

    set(token) {
        localStorage.setItem('token', token);
    }
    get() {
        return localStorage.getItem('token');
    }

    remove() {
        localStorage.removeItem('token');
    }

    isValid() {
        const token = this.get();
        if (token) {
            const payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    }

    payload(token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    decode(payload) {
        return JSON.parse(atob(payload));
    }

    loggedIn() {
        return this.isValid();
    }
}