import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CmsService} from '../cms.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) {
  }

  signup(data) {
      return this.http.post(`${this.baseUrl}/signup`, data);
  }

  login(data) {
      return this.http.post(`${this.baseUrl}/login`, data);
  }

  sendPasswordResetLink(data) {
      return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
      return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }
}
