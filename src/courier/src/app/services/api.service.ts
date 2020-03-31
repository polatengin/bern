import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignUpModel } from '../models/signup.models';
import { LoginModel } from '../models/login.models';

import { environment } from '../../environments/environment';

const BASE: string = environment.apiUrl + 'courier/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  signup(model: SignUpModel): Observable<boolean> {
    return this.http.post<boolean>(BASE + 'signup/', model);
  }

  login(model: LoginModel): Observable<boolean> {
    return this.http.post<boolean>(BASE + 'login/', model);
  }

}
