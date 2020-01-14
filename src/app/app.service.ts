import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private cpf = null;
  private user = null;
  private permissions = null;

  constructor(private http: HttpClient) { }

  load() {
    if (environment.production) {
      return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
        this.http.get(`api/auth/cpf`, { headers, responseType: 'text' }).pipe(
          tap(response => this.cpf = response),
          switchMap(response => this.loadResourceUser(response))
        ).subscribe(response => {
          this.user = response[0]
          this.permissions = response[1];
          resolve();
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
        this.http.get(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/swagger-ui.html`,
          { headers, responseType: 'text' }).pipe(
          tap(response => this.cpf = '04274554724'),
          switchMap(response => this.loadResourceUser(this.cpf))
        ).subscribe(response => {
          this.user = response[0]
          this.permissions = response[1];
          console.log(this.permissions)
          resolve();
        });
      });
    }
  }
  loadResourceUser(cpf) {
    return zip(
      this.http.get(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/pessoas/cpf/${cpf}`),
      this.http.get(`${environment.compepe_url}/api/acesso/permissoesBy/${this.cpf}/13`)
    );
  }

  public getUser(): any {
    return this.user;
  }
}
