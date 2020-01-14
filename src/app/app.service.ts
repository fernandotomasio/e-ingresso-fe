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
  private organization: any = null;
  private organizations: any = null;
  constructor(private http: HttpClient) { }

  load() {
    if (environment.production) {
      return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
        this.http.get(`api/auth/cpf`, { headers, responseType: 'text' }).pipe(
          tap(response => this.cpf = response),
          switchMap(response => this.loadResourceUser(response)),
          tap(response => {
            this.user = response[0]
            this.permissions = response[1];
          }),
          switchMap(response => this.loadResourcesOrg(8001)),
          tap(response => {
            this.organization = response[0];
            this.organizations = response[1];
          }),
        ).subscribe(response => {
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
          switchMap(response => this.loadResourceUser(this.cpf)),
          tap(response => {
            this.user = response[0]
            this.permissions = response[1];
          }),
          switchMap(response => this.loadResourcesOrg(8001)),
          tap(response => {
            this.organization = response[0];
            this.organizations = response[1];
          }),
        ).subscribe(response => {
          console.log('organization', this.organization);
          console.log('organizations', this.organizations);
          console.log('user', this.user);
          console.log('permissions', this.permissions)
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
  loadResourcesOrg(oid) {
    return zip(
      this.http.get(`${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/organizacoes_militares/${oid}`),
      this.http.get(
        `${environment.api_protocol}://${environment.api_host}:${environment.api_port}/api/v1/organizacoes_militares/${oid}/diretamente_subordinadas`),
    );
  }
  public getUser(): any {
    return this.user;
  }
  public getOrganization(): any {
    return this.organization;
  }
}
