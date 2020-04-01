import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignUpRequestModel, SignUpResponseModel } from '../models/signup.models';
import { LoginModel } from '../models/login.models';
import { DeliveryListRequestModel, DeliveryListResponseModel } from '../models/main.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  signup(model: SignUpRequestModel): Observable<SignUpResponseModel> {
    return this.http.post<SignUpResponseModel>(this.base + 'courier/signup', model);
  }

  login(model: LoginModel): Observable<boolean> {
    return this.http.post<boolean>(this.base + 'courier/login', model);
  }

  deliveryList(model: DeliveryListRequestModel): Observable<DeliveryListResponseModel[]> {
    return this.http.post<DeliveryListResponseModel[]>(this.base + 'courier/main', model);
  }

}
