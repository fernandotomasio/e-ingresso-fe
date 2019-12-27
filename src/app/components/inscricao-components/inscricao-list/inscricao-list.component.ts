import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InscricaoService } from '../../../core/inscricao.service';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'ein-inscricao-list',
  templateUrl: './inscricao-list.component.html',
  styleUrls: ['./inscricao-list.component.scss']
})
export class InscricaoListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input() eventoOid: number;
  dataList$: Observable<any>;

  constructor(private service: InscricaoService) { }


  paginateOptions = []


  dataSearch = {
    paginate: 'true',
    size: 2,
    page: 0,
    orderBy: []
  }


  ngOnInit() {
    this.dataList$ = this.service.findAll({ eventoOids: [ this.eventoOid ] } );
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
