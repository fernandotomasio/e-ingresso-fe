import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoService } from '../../../core/evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'ein-evento-showcase-list',
  templateUrl: './evento-showcase-list.component.html',
  styleUrls: ['./evento-showcase-list.component.scss']
})
export class EventoShowcaseListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input() categoriaOid: number;
  dataList$: Observable<any>;

  paginateOptions = []

  totalCount: number;

  filteredCount: number;


  dataSearch = {
    paginate: 'true',
    size: '10',
    page: '0',
    orderBy: []
  }


  constructor(private service: EventoService,
              private route: ActivatedRoute,
              private router: Router,
  ) {}

  ngOnInit() {
    this.dataList$ = this.service.findAll({ categoriaOids: [ this.categoriaOid]});
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
