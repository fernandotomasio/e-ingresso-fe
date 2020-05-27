import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { cleanEmptyFields } from '../helpers/form-helpers';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService {

  constructor(private http: HttpClient) { }

  findAll(data: any): Observable<any> {
    cleanEmptyFields(data);
    const params = new HttpParams({ fromObject: data });
    return this.http.get<any>(`${environment.api_endpoint}/api/v1/organizacoes_militares`, { params });
  }

  find(oid: number): Observable<any> {
    return this.http.get(`${environment.api_endpoint}/api/v1/organizacoes_militares/${oid}`);
  }

}
