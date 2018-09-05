import {Injectable} from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {ResponseInterface} from '../../_contracts/response.interface';
import {MapUtils} from '../../shared/class/maputils';
import {HttpClient} from '@angular/common/http';
import {Permission} from '../../_models/User/Permission';
import {CmsService} from '../cms.service';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    private baseUrl = '/api/permissions/';

    constructor(private http: HttpClient) {
    }

    getPermissions(id: number): Observable<any> {
        const url = `${this.baseUrl}` + id;
        return this.http.get(url)
            .pipe(
                map((res: ResponseInterface) => {
                    return MapUtils.deserialize(Permission, res.data);
                }));
    }
}
