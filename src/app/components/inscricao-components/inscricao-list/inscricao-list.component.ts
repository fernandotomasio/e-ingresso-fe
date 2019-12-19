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

  totalCount: number;

  filteredCount: number;


  dataSearch = {
    paginate: 'true',
    size: '10',
    page: '0',
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
  onSearchChange(event) {
    console.log(event);
  }

  onPageChange(event: PageEvent) {
    console.log(event);
  }

}
