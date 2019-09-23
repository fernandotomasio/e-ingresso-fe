import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../../core/categoria.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ein-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  titulo = 'Lista de Categorias';

  dataList$: Observable<any>;

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll();
   ;
  }

}
