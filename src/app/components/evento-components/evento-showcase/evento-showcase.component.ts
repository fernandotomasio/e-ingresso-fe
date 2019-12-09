import { Component, Input, OnInit } from '@angular/core';
import { EventoService } from '../../../core/evento.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ein-evento-showcase',
  templateUrl: './evento-showcase.component.html',
  styleUrls: ['./evento-showcase.component.scss']
})
export class EventoShowcaseComponent implements OnInit {

  @Input() oid: number

  data$: Observable<any>;

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.data$ = this.service.find(this.oid);
  }

}
