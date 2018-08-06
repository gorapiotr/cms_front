import {Injectable} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';


import {Router} from '@angular/router';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = localStorage.getItem('token');

        //request.headers.append('Accept', 'application/json');
        //request.headers.append('Authorization', `Bearer ${access_token}`);

        const customReq = request.clone({
            headers: request.headers.append('Authorization', `Bearer ${access_token}`)
        });

        return next.handle(customReq);
    }
}
