import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../core/evento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ein-evento-detail-page',
  templateUrl: './evento-detail-page.component.html',
  styleUrls: ['./evento-detail-page.component.scss']
})
export class EventoDetailPageComponent implements OnInit {

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
