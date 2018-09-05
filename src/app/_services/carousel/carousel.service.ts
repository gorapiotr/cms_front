import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carousel} from '../../_models/Carousel/Carousel';
import {Observable} from 'rxjs';
import {ResponseInterface} from '../../_contracts/response.interface';
import {map} from 'rxjs/internal/operators';
import {MapUtils} from '../../shared/class/maputils';
import {CmsService} from '../cms.service';

@Injectable({
  providedIn: 'root'
})
export class CarouselService{

    carousel: Carousel;

    private baseUrl = '/api/carousel/';

    constructor(private http: HttpClient) {
    }

    getCarousels(): Observable<any> {
        return this.http.get(`${this.baseUrl}`)
            .pipe(map(this.mapResponseList));
    }

    update(data): Observable<any> {
        const req = { carousels: data};
        return this.http.put(`${this.baseUrl}`, req);
    }

    mapResponseList = (res: ResponseInterface) => {
        if ( !!res.data ) {
            res.data = res.data.map((value) => MapUtils.deserialize(Carousel, value));
        }
        // if ( !!res.meta ) {
        //     res.meta = new MetaCollectionInterfac(res.meta);
        // }
        return res;
    }



}
