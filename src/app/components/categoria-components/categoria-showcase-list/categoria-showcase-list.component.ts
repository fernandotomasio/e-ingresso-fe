import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from '../../../core/categoria.service';
import { PageEvent } from '@angular/material';
import { NotificationService } from '../../../core/notification.service';

@Component({
  selector: 'app-categoria-showcase-list',
  templateUrl: './categoria-showcase-list.component.html',
  styleUrls: ['./categoria-showcase-list.component.scss']
})
export class CategoriaShowcaseListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  titulo = 'Lista de Categorias';

  dataList$: Observable<any>;

  paginateOptions = []

  dataSearch = {
    paginate: 'true',
    size: 10,
    page: 0,
    orderBy: []
  }

  constructor(private service: CategoriaService, private notification: NotificationService) { }

  ngOnInit() {
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

  refresh() {
    this.dataList$ = this.service.findAll(this.dataSearch);

  }

  message() {
    this.notification.openSnackBar('teste');
  }
}
