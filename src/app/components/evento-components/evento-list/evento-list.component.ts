import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {EventoService} from '../../../core/evento.service';
import {Observable} from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'ein-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  @Output() action = new EventEmitter<any>();
  titulo = 'Lista de Eventos';

  dataList$: Observable<any>;

  displayedColumns: string[] = ['oid', 'nome', 'controls'];

  paginateOptions = [];

  dataSearch = {
    paginate: 'true',
    size: 5,
    page: 0,
    orderBy: []
  };

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.dataList$ = this.service.findAll(this.dataSearch);

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
    this.dataSearch = Object.assign(this.dataSearch, { page: '0'})
    this.dataSearch = Object.assign(this.dataSearch, event)
    this.refresh();
  }

}
