import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CategoriaService} from '../../../core/categoria.service';
import {Observable} from 'rxjs';

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

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll();
  }

  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }
}
