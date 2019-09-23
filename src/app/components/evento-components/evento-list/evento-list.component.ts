import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../core/evento.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ein-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  dataList$: Observable<any>;

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll();
  }

}
