import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../../../core/evento.service';

@Component({
  selector: 'ein-store-eventos-detail',
  templateUrl: './store-eventos-detail.component.html',
  styleUrls: ['./store-eventos-detail.component.scss']
})
export class StoreEventosDetailComponent implements OnInit {

  oid: number;

  constructor(private service: EventoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oid = params.oid;
    });
  }
  onAction(event: any) {

    if (event.action === 'editInscricao') {
      this.router.navigate(['/store', event.oid , 'inscricao']);
    }
    if (event.action === 'editIndicacao') {
      this.router.navigate(['/store', event.oid , 'indicacao']);
    }
  }


}
