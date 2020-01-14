import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { cleanEmptyFields } from '../helpers/form-helpers';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  constructor(private http: HttpClient) { }

  remove(oid: number): Observable<any> {
    return this.http.delete(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/inscricoes/${oid}`);
  }
  findAll(data: any): Observable<any> {
    cleanEmptyFields(data);
    const params = new HttpParams({ fromObject: data });
    return this.http.get(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/inscricoes`, { params });
  }
  find(oid: number): Observable<any> {
    return this.http.get(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/inscricoes/${oid}`);
  }
  save(data: any): Observable<any> {
    return !data.oid
      ? this.http.post<any>(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/inscricoes`, data)
      : this.http.put<any>(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/inscricoes`, data);
  }
}
