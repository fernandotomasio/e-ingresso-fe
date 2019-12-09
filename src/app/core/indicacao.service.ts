import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/indicacoes`);
  }

  save(data: any): Observable<any> {
    return !data.oid
      // tslint:disable-next-line:no-shadowed-variable
      ? this.http.post<any>(`http://localhost:8080/api/v1/indicacoes`, data).pipe(map(data => data))
      // tslint:disable-next-line:no-shadowed-variable
      : this.http.put<any>(`http://localhost:8080/api/v1/indicacoes`, data).pipe(map(data => data));
  }
}
