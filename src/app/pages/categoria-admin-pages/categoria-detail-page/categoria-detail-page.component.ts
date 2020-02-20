import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../core/evento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-detail-page',
  templateUrl: './categoria-detail-page.component.html',
  styleUrls: ['./categoria-detail-page.component.scss']
})
export class CategoriaDetailPageComponent implements OnInit {

  oid: number;

  constructor(private service: EventoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oid = params.oid;
    });
  }
}
