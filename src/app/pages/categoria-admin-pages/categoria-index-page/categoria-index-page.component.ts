import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ein-categoria-index-page',
  templateUrl: './categoria-index-page.component.html',
  styleUrls: ['./categoria-index-page.component.scss']
})
export class CategoriaIndexPageComponent implements OnInit {

  constructor(private service: CategoriaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onAction(event: any) {
    if (event.action === 'detail') {
      this.router.navigate(['/categorias', event.oid, 'detail']);
    }
    if (event.action === 'edit') {
      this.router.navigate(['/categorias', event.oid, 'edit']);
    }
  }
}
