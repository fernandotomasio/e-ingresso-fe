import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../../core/categoria.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ein-pessoa-index-page',
  templateUrl: './pessoa-index-page.component.html',
  styleUrls: ['./pessoa-index-page.component.scss']
})
export class PessoaIndexPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onAction(event: any) {
    if (event.action === 'detail') {
      this.router.navigate(['/pessoas', event.oid, 'detail']);
    }
    if (event.action === 'edit') {
      this.router.navigate(['/pessoas', event.oid, 'edit']);
    }
  }
}
