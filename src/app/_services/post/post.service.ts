import { Injectable } from '@angular/core';
import {MetaCollectionInterface} from '../../_models/MetaCollection/MetaCollectionInterface';
import {ResponseInterface} from '../../_contracts/response.interface';
import {User} from '../../_models/User/User';
import {HttpClient} from '@angular/common/http';
import {MapUtils} from '../../shared/class/maputils';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {Post} from '../../_models/Post/Post';
import {Setting} from '../../_models/Settings/Setting';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    post: Post;
    posts: Array<Post>;
    meta: MetaCollectionInterface;

    private baseUrl = '/api/post';

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

    update(post: Post): Observable<any>{
        const uploadData = new FormData();
        uploadData.append('id', String(post.id));
        uploadData.append('slug', post.slug);
        uploadData.append('content', post.content);
        uploadData.append('lead', post.lead);
        uploadData.append('main_image_file', post.main_image_file);
        console.log(uploadData);
        return this.http.post(`${this.baseUrl}/` + post.id, uploadData);
    }


    get(id: number): Observable<any> {
        const url = this.baseUrl + '/' + id;
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