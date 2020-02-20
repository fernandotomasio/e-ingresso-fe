import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CategoriaService} from '../../../core/categoria.service';
import {Observable} from 'rxjs';
import { PageEvent } from '@angular/material';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  titulo = 'Lista de Categorias';

  dataList = [];

  filteredCount: number;

  displayedColumns: string[] = ['oid', 'titulo', 'descricao', 'controls'];

  paginateOptions = [];

  dataSearch = {
    paginate: 'true',
    size: 10,
    page: 0,
    orderBy: []
  }

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.service.findAll(this.dataSearch).subscribe( response => {
      this.dataList = response.data;
      this.filteredCount = response.filteredCount
    });

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
