import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { InscricaoService } from '../../../core/inscricao.service';
import { IndicacaoService } from '../../../core/indicacao.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'ein-indicacao-list',
  templateUrl: './indicacao-list.component.html',
  styleUrls: ['./indicacao-list.component.scss']
})
export class IndicacaoListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input() eventoOid: number;
  dataList$: Observable<any>;

  paginateOptions = []

  dataSearch = {
    paginate: 'true',
    size: 2,
    page: 0,
    orderBy: []
  };



  constructor(private service: IndicacaoService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll({ eventoOids: [ this.eventoOid ], ...this.dataSearch } );
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
    this.dataList$ = this.service.findAll({ eventoOids: [ this.eventoOid ], ...this.dataSearch });

  }

}
