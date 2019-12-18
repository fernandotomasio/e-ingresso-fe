import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/categorias`);
  }
  remove(oid: number): Observable<any> {
    return null;
  }
  find(oid: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/categorias/${oid}`);
  }

}
