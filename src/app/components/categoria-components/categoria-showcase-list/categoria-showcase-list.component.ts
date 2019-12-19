import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from '../../../core/categoria.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'ein-categoria-showcase-list',
  templateUrl: './categoria-showcase-list.component.html',
  styleUrls: ['./categoria-showcase-list.component.scss']
})
export class CategoriaShowcaseListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  titulo = 'Lista de Categorias';

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

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll({});
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
