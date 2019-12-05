import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../core/evento.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ein-store-eventos-page',
  templateUrl: './store-eventos-page.component.html',
  styleUrls: ['./store-eventos-page.component.scss'],
})
export class StoreEventosPageComponent implements OnInit {
  oid: number;
  dataList$: Observable<any>;

  constructor(private service: EventoService,
              private route: ActivatedRoute,
              private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oid = params.oid;
    });
    this.dataList$ = this.service.findAll();
  }

}
