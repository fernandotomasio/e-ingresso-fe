import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventoService } from '../../../core/evento.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ein-evento-showcase',
  templateUrl: './evento-showcase.component.html',
  styleUrls: ['./evento-showcase.component.scss']
})
export class EventoShowcaseComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  @Input() oid: number

  data$: Observable<any>;

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.data$ = this.service.find(this.oid);
  }
  onInscricaoAction(event: any) {
    this.action.emit({ ...event,  action: (event.action === 'edit') ? 'editInscricao' : event.action});
  }
  onIndicacaoAction(event: any) {
    this.action.emit({ ...event,  action: 'editIndicacao'});
  }

}
