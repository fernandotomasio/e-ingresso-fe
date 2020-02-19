import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoService } from '../../../core/evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-evento-showcase-list',
  templateUrl: './evento-showcase-list.component.html',
  styleUrls: ['./evento-showcase-list.component.scss']
})
export class EventoShowcaseListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input() categoriaOid: number;
  dataList$: Observable<any>;

  paginateOptions = []

  dataSearch = {
    paginate: 'true',
    size: 5,
    page: 0,
    orderBy: []
  }


  constructor(private service: EventoService,
              private route: ActivatedRoute,
              private router: Router,
  ) {}

  ngOnInit() {
    this.dataList$ = this.service.findAll({ categoriaOids: [ this.categoriaOid], ...this.dataSearch});
  }

  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }

  refresh() {
    this.dataList$ = this.service.findAll( { categoriaOids: [ this.categoriaOid], ...this.dataSearch});

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
