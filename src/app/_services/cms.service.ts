import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  protected url = 'http://localhost:80/api';
  protected tokenUrl = 'http://localhost/api';

  constructor() { }
}
