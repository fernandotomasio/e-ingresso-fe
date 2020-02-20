import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IndicacaoService } from '../../../core/indicacao.service';
import { PageEvent } from '@angular/material';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-indicacao-list',
  templateUrl: './indicacao-list.component.html',
  styleUrls: ['./indicacao-list.component.scss']
})
export class IndicacaoListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input() eventoOid: number;
  dataList: any;
  filteredCount: number
  paginateOptions = []

  dataSearch = {
    paginate: 'true',
    size: 10,
    page: 0,
    orderBy: []
  };



  constructor(private service: IndicacaoService,
              private appService: AppService) { }

  ngOnInit() {
    this.refresh();
  }
  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }
  onPageChange(event: PageEvent) {
    this.dataSearch.size = event.pageSize
    this.dataSearch.page = event.pageIndex
    this.refresh();

  }
  onSearchChange(event) {
    this.dataSearch = Object.assign(this.dataSearch, { page: 0})
    this.dataSearch = Object.assign(this.dataSearch, event)
    this.refresh();
  }

  refresh() {
    this.service.findAll({ eventoOids: [ this.eventoOid ], organizacaoSolicitanteOids: this.appService.getOrganization().oid,
      ...this.dataSearch } ).subscribe(response => {
      this.dataList = response.data;
      this.filteredCount = response.filteredCount;
    });

  }

}
