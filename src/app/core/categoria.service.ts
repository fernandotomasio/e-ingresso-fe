import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { cleanEmptyFields } from '../helpers/form-helpers';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  findAll(data: any): Observable<any> {
    cleanEmptyFields(data);
    const params = new HttpParams({ fromObject: data });
    return this.http.get(`http://localhost:8080/api/v1/categorias`, { params });
  }
  remove(oid: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/v1/categorias/${oid}`);
  }
  find(oid: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/categorias/${oid}`);
  }

}
