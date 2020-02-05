import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { cleanEmptyFields } from '../helpers/form-helpers';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {
  constructor(private http: HttpClient) { }

  remove(oid: number): Observable<any> {
    return this.http.delete(`${environment.api_endpoint}/api/v1/propostas/${oid}`);
  }

  findAll(data: any): Observable<any> {
    cleanEmptyFields(data);
    const params = new HttpParams({ fromObject: data });
    return this.http.get(`${environment.api_endpoint}/api/v1/propostas`, { params });
  }
  find(oid: number): Observable<any> {
    return this.http.get(`${environment.api_endpoint}/api/v1/propostas/${oid}`);
  }
  save(data: any): Observable<any> {
    return !data.oid
      ? this.http.post<any>(`${environment.api_endpoint}/api/v1/propostas`, data)
      : this.http.put<any>(`${environment.api_endpoint}/api/v1/propostas`, data);
  }
}
