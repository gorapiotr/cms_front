import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ResponseInterface} from "../../_contracts/response.interface";
import {MapUtils} from "../../shared/class/maputils";
import {Slider} from "../../_models/Slider/Slider";

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private baseUrl = '/api/slider/';

    constructor(private http: HttpClient) {
    }

    get(): Observable<any> {

        return this.http.get(`${this.baseUrl}`)
            .pipe(
                map((res: ResponseInterface) => {
                    return res.data.map( (x) => {
                        return MapUtils.deserialize(Slider, x);
                    });
                }));
    }

    update(slide: Slider): Observable<any>{
        const uploadData = new FormData();
        uploadData.append('file', slide.file);
        uploadData.append('url', slide.url);
        return this.http.post(`${this.baseUrl}` + slide.id, uploadData);
    }
}
