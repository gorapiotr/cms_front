import { Injectable } from '@angular/core';
import {ResponseInterface} from '../../../_contracts/response.interface';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../../_models/Post/Post';
import {MetaCollectionInterface} from '../../../_models/MetaCollection/MetaCollectionInterface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {MapUtils} from '../../../shared/class/maputils';

@Injectable({
  providedIn: 'root'
})
export class PostPageService {

    post: Post;
    posts: Array<Post>;
    meta: MetaCollectionInterface;

    private baseUrl = '/api/page/post';

    constructor(private http: HttpClient) {
    }

    getPage(page: any): Observable<any> {
        if (!page) {
            page = '1';
        } else {
            page = page.toString();
        }
        return this.http.get<ResponseInterface>(this.baseUrl, {params: {page: page}})
            .pipe(
                map((res: ResponseInterface) => {
                    this.posts = res.data.map((data: ResponseInterface) => MapUtils.deserialize(Post, data));
                    this.meta = new MetaCollectionInterface(res.meta);
                    return this.posts;
                }))
            .catch(this.handleError);
    }

    get(slug: string): Observable<any> {
        const url = this.baseUrl + '/' + slug;
        return this.http.get<ResponseInterface>(url);
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
}