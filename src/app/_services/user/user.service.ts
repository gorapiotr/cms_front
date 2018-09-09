import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MapUtils} from '../../shared/class/maputils';
import {User} from '../../_models/User/User';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {ResponseInterface} from '../../_contracts/response.interface';
import {MetaCollectionInterface} from '../../_models/MetaCollection/MetaCollectionInterface';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    user: User;
    users: Array<User>;
    meta: MetaCollectionInterface;

    private baseUrl = '/api/user';

    constructor(private http: HttpClient) {
    }

    getPage(page: any): Observable<any>  {
        if (!page) {
            page = '1';
        } else {
            page = page.toString();
        }
        const url = this.baseUrl + '/list';
        return this.http.get<ResponseInterface>(url, {params: {page: page}})
            .pipe(
                map((res: ResponseInterface) => {
                    this.users = res.data.map((data: ResponseInterface) => MapUtils.deserialize(User, data));
                    this.meta = new MetaCollectionInterface(res.meta);
                    return this.users;
                }))
            .catch(this.handleError);
    }

    /**
     * TODO
     * EXPORT TO CMS_SERVICE
     *
     */
    handleError(error: any) {
        console.log(error);
        return Observable.throw(error.error || 'Server Error');
    }

    getUserData(): Observable<any> {
        return this.http.get(`${this.baseUrl}`)
            .pipe(
                map((res: ResponseInterface) => {
                    return MapUtils.deserialize(User, res.data);
                }));
    }
}


