import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { cleanEmptyFields } from '../helpers/form-helpers';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  findAll(data: any): Observable<any> {
    cleanEmptyFields(data);
    const params = new HttpParams({ fromObject: data });
    return this.http.get(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/categorias`, { params });
  }
  remove(oid: number): Observable<any> {
    return this.http.delete<any>(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/categorias/${oid}`)
  }

  save(data:any): Observable<any>{
    return !data.oid
      ? this.http.post<any>(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/categorias/`, data)
      : this.http.put<any>(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/categorias/`, data);
  }
  find(oid: number): Observable<any> {
    return this.http.get(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/categorias/${oid}`);
  }

}
