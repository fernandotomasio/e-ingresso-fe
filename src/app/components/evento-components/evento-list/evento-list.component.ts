import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {EventoService} from '../../../core/evento.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ein-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  @Output() action = new EventEmitter<any>();
  titulo = 'Lista de Eventos';

  dataList$: Observable<any>;

  displayedColumns: string[] = ['oid', 'nome', 'controls'];

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.dataList$ = this.service.findAll({});
  }
  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }

}
