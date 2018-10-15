import { Injectable } from '@angular/core';
import {ResponseInterface} from '../../../_contracts/response.interface';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {Setting} from '../../../_models/Settings/Setting';
import {MapUtils} from '../../../shared/class/maputils';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsPageService {

    private baseUrl = '/api/page/settings/';

    constructor(private http: HttpClient) {
    }

    getSettings(): Observable<any> {

        return this.http.get(`${this.baseUrl}`)
            .pipe(
                map((res: ResponseInterface) => {
                    return res.data.map( (x) => {
                        return MapUtils.deserialize(Setting, x);
                    });
                }));
    }
}
