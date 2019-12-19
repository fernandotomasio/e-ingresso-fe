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

  totalCount: number;

  filteredCount: number;


  dataSearch = {
    paginate: 'true',
    size: '10',
    page: '0',
    orderBy: []
  };



  constructor(private service: IndicacaoService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll({ eventoOids: [ this.eventoOid ] } );
  }
  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }
  onSearchChange(event) {
    console.log(event);
  }

  onPageChange(event: PageEvent) {
    console.log(event);
  }

}
