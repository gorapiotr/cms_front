import { Injectable } from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseInterface} from '../../_contracts/response.interface';
import {MapUtils} from '../../shared/class/maputils';
import {Setting} from '../../_models/Settings/Setting';
import {CmsService} from '../cms.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService{


    private baseUrl = '/api/settings/';

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
        const uploadData = new FormData();
        uploadData.append('file', setting.file);
        uploadData.append('key', setting.key);
        uploadData.append('value', setting.value);
        return this.http.post(`${this.baseUrl}` + setting.id, uploadData);
    }
}
