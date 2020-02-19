import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-categorias-page',
  templateUrl: './store-categorias-page.component.html',
  styleUrls: ['./store-categorias-page.component.scss']
})
export class StoreCategoriasPageComponent implements OnInit {

  dataList$: Observable<any>

  constructor(private service: CategoriaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll({});
  }

  onAction(event: any) {
    if (event.action === 'detail') {
      this.router.navigate(['/store', event.oid, 'eventos']);
    }

  }
}
