import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsesService {

  constructor(private http: HttpClient) { }

  getById(id): Observable<any> {
    return this.http.get(environment.api_url + `users/${id}/detail`);
  }

  updateUser(id,data): Observable<any>{
    return this.http.put(environment.api_url + `users/${id}/update`, data);
  }
}
