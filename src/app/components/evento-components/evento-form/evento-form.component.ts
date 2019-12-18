import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoService } from '../../../core/evento.service';

@Component({
  selector: 'ein-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent implements OnInit {

  @Input() oid: number;

  data$: Observable<any>;

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.data$ = this.service.find(this.oid);
  }

}
