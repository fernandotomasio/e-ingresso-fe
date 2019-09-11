import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../../core/categoria.service';

@Component({
  selector: 'ein-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  titulo = 'Lista de Categorias';

  dataList = [];

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.service.findAll().subscribe(response => {
      this.dataList = response.data;
    });
  }

}
