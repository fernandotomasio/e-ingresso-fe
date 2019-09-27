import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ein-store-categorias-page',
  templateUrl: './store-categorias-page.component.html',
  styleUrls: ['./store-categorias-page.component.scss']
})
export class StoreCategoriasPageComponent implements OnInit {

  dataList$: Observable<any>

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll();
  }

}
