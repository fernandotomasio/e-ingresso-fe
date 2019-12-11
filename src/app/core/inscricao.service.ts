import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  constructor(private http: HttpClient) { }

  findAll(data: any): Observable<any> {
    const params = new HttpParams({ fromObject: data });
    return this.http.get(`http://localhost:8080/api/v1/inscricoes`, { params });
  }

  save(data: any): Observable<any> {
    return !data.oid
      // tslint:disable-next-line:no-shadowed-variable
      ? this.http.post<any>(`http://localhost:8080/api/v1/inscricoes`, data).pipe(map(data => data))
      // tslint:disable-next-line:no-shadowed-variable
      : this.http.put<any>(`http://localhost:8080/api/v1/inscricoes`, data).pipe(map(data => data));
  }
}
