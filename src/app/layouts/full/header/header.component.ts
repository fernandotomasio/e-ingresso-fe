import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {AppService} from '../../../app.service';
import {environment} from '../../../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements  OnInit{
  public config: PerfectScrollbarConfigInterface = {};
  saram: ''
  organization = '';
  url: any
  constructor(private appService: AppService) { }


  ngOnInit(): void {
    this.saram = this.appService.getUser().saram;
    this.organization = this.appService.getOrganization();
    this.url = `${environment.api_endpoint}/api/v1/pessoas/${this.saram}/thumbnail`;
  }
}
