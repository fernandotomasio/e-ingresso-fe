import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CategoriaService} from '../../../core/categoria.service';
import {Observable} from 'rxjs';
import { PageEvent } from '@angular/material';
import { async } from '@angular/core/testing';

@Component({
  selector: 'ein-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  titulo = 'Lista de Categorias';

  dataList$: Observable<any>;

  displayedColumns: string[] = ['oid', 'titulo', 'descricao', 'controls'];

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
    this.refresh();
  }

  refresh() {
    this.dataList$ = this.service.findAll({});

  }
  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }

  onPageChange(event: PageEvent) {
    console.log(event);
  }


  onSearchChange(event) {
    console.log(event);
  }
}
