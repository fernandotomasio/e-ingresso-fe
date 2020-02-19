import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoService } from '../../../core/evento.service';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.scss']
})
export class EventoDetailComponent implements OnInit {

  @Input() oid: number;

  data$: Observable<any>;

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.data$ = this.service.find(this.oid);
  }
}
