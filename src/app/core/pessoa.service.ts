import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { cleanEmptyFields } from '../helpers/form-helpers';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  findAll(data: any): Observable<any> {
    cleanEmptyFields(data);
    const params = new HttpParams({ fromObject: data });
    return this.http.get<any>(`http://localhost:8080/api/v1/pessoas?paginate=true&page=0&size=10`, { params });
  }

  find(oid: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/pessoas/${oid}`);
  }
}
