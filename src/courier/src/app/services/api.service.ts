import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignUpModel } from '../models/signup.models';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  signup(model: SignUpModel): Observable<boolean> {
    return this.http.post<boolean>(this.base + 'courier/signup', model);
  }
}
