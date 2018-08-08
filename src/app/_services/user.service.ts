import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';
import {Headers} from '@angular/http';
import {MapUtils} from '../shared/class/maputils';
import {User} from '../_models/User';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {ResponseInterface} from '../_contracts/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    user: User;

    private baseUrl = 'http://localhost:80/api/user';

    constructor(private http: HttpClient) {
    }

    getUserData(): Observable<any> {

        return this.http.get(`${this.baseUrl}`)
            .pipe(
              map((res: ResponseInterface) => {
                return MapUtils.deserialize(User, res.data);
            }));
    }
}


