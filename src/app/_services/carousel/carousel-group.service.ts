import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {ResponseInterface} from '../../_contracts/response.interface';
import {MapUtils} from '../../shared/class/maputils';
import {CarouselGroup} from '../../_models/Carousel/CarouselGroup';
import {Carousel} from '../../_models/Carousel/Carousel';
import {CmsService} from '../cms.service';

@Injectable({
  providedIn: 'root'
})
export class CarouselGroupService{

    private baseUrl = '/api/carousel-group/';

    constructor(private http: HttpClient) {
    }

    getCarouselGroups(): Observable<any> {
        return this.http.get(`${this.baseUrl}`)
            .pipe(map( ( res: ResponseInterface ) => this.mapResponseList(res, CarouselGroup)));
    }

    getCarouselGroupById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}${id}`)
            .pipe(map( ( res: ResponseInterface ) => this.mapResponseList(res, Carousel)));
    }

    update(data, id: number): Observable<any> {
        const req = { carousels: data};
        return this.http.put(`${this.baseUrl}${id}`, req);
    }

    mapResponseList = (res: ResponseInterface, obj: any) => {
        if ( !!res.data ) {
            res.data = res.data.map((value) => MapUtils.deserialize(obj, value));
        }
        // if ( !!res.meta ) {
        //     res.meta = new MetaCollectionInterfac(res.meta);
        // }
        return res;
    }
}
