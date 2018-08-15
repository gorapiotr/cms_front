import {Injectable} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import 'rxjs/add/operator/catch';
import {ErrorObservable} from 'rxjs-compat/observable/ErrorObservable';
import {AuthService} from '../_services/auth.service';
import {TokenService} from '../_services/token.service';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

    constructor(private router: Router,
                private Auth: AuthService,
                private Token: TokenService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = localStorage.getItem('token');

        //request.headers.append('Accept', 'application/json');
        //request.headers.append('Authorization', `Bearer ${access_token}`);

        const customReq = request.clone({
            headers: request.headers.append('Authorization', `Bearer ${access_token}`)
        });

        return next.handle(customReq)
            .catch((err: HttpErrorResponse) => {
                let errMsg: string;
                const errorResponse = JSON.stringify(err.error) || err.message;
                errMsg = `${err.status} - ${err.statusText || ''} Details: ${errorResponse}`;
                console.log(errMsg);

                if (err.status === 401) {
                    this.Auth.changeAuthStatus(false);
                    this.Token.remove();
                    this.router.navigateByUrl('/');
                }

                return ErrorObservable.create(err.error);
            });
    }
}
