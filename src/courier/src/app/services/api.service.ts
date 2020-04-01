import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignUpRequestModel, SignUpResponseModel } from '../models/signup.models';
import { LoginModel } from '../models/login.models';
import { DeliveryListRequestModel, DeliveryListResponseModel } from '../models/main.models';

import { environment } from '../../environments/environment';

const BASE: string = environment.apiUrl + 'courier/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  signup(model: SignUpRequestModel): Observable<SignUpResponseModel> {
    return this.http.post<SignUpResponseModel>(BASE + 'signup', model);
  }

  login(model: LoginModel): Observable<boolean> {
    return this.http.post<boolean>(BASE + 'login', model);
  }

  deliveryList(model: DeliveryListRequestModel): Observable<DeliveryListResponseModel[]> {
    return this.http.post<DeliveryListResponseModel[]>(BASE + 'main', model);
  }

  getAddressFromCoordinates(model: AddressFromCoordinatesRequestModel): Observable<AddressFromCoordinatesResponseModel> {
    return this.http.post<AddressFromCoordinatesResponseModel>(BASE + 'address_from_coordinates', model);
  }

  searchAddress(model: SearchAddressRequestModel): Observable<SearchAddressResponseModel[]> {
    return this.http.post<SearchAddressResponseModel[]>(BASE + 'search_address', model);
  }

}
