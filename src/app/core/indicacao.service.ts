import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cleanEmptyFields } from '../helpers/form-helpers';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {
  constructor(private http: HttpClient) { }

  remove(oid: number): Observable<any> {
    return null;
  }

  findAll(data: any): Observable<any> {
    cleanEmptyFields(data);
    const params = new HttpParams({ fromObject: data });
    return this.http.get(`http://localhost:8080/api/v1/indicacoes`, { params });
  }

  save(data: any): Observable<any> {
    return !data.oid
      // tslint:disable-next-line:no-shadowed-variable
      ? this.http.post<any>(`http://localhost:8080/api/v1/indicacoes`, data).pipe(map(data => data))
      // tslint:disable-next-line:no-shadowed-variable
      : this.http.put<any>(`http://localhost:8080/api/v1/indicacoes`, data).pipe(map(data => data));
  }
}
