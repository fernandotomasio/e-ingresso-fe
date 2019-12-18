import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../../../core/evento.service';

@Component({
  selector: 'ein-evento-index-page',
  templateUrl: './evento-index-page.component.html',
  styleUrls: ['./evento-index-page.component.scss']
})
export class EventoIndexPageComponent implements OnInit {

  constructor(private service: EventoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }
  onAction(event: any) {
    if (event.action === 'detail') {
      this.router.navigate(['/eventos', event.oid, 'detail']);
    }
    if (event.action === 'edit') {
      this.router.navigate(['/eventos', event.oid, 'edit']);
    }
  }
}
