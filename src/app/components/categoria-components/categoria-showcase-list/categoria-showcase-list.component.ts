import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from '../../../core/categoria.service';

@Component({
  selector: 'ein-categoria-showcase-list',
  templateUrl: './categoria-showcase-list.component.html',
  styleUrls: ['./categoria-showcase-list.component.scss']
})
export class CategoriaShowcaseListComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  titulo = 'Lista de Categorias';

  dataList$: Observable<any>;


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
