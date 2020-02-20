import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../core/evento.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-eventos-page',
  templateUrl: './store-eventos-page.component.html',
  styleUrls: ['./store-eventos-page.component.scss'],
})
export class StoreEventosPageComponent implements OnInit {
  categoriaOid: number;
  dataList$: Observable<any>;

  constructor(private service: EventoService,
              private route: ActivatedRoute,
              private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoriaOid = params.oid;
    });
    this.dataList$ = this.service.findAll({ categoriaOids: [ this.categoriaOid]});
  }

  onAction(event: any) {
    if (event.action === 'detail') {
      this.router.navigate(['/store', 'eventos', event.oid]);
    }
    if (event.action === 'subscribe') {
      this.router.navigate(['/store', event.oid, 'inscricao']);
    }
  }

}
