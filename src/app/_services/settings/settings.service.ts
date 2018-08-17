import { Injectable } from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseInterface} from '../../_contracts/response.interface';
import {MapUtils} from '../../shared/class/maputils';
import {Setting} from '../../_models/Settings/Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


    private baseUrl = 'http://localhost:80/api/settings/';

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

    update(setting: Setting): Observable<any>{
        return this.http.put(`${this.baseUrl}` + setting.id, setting);
    }
}
