import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  findAll(data: any): Observable<any> {
    const params = new HttpParams({ fromObject: data });
    return this.http.get(`http://localhost:8080/api/v1/eventos`, { params });
  }

  find(oid: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/eventos/${oid}`);
  }
  remove(oid: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/v1/eventos/${oid}`);
  }
}
