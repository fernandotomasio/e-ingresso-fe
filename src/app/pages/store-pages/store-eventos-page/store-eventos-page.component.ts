import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../core/evento.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ein-store-eventos-page',
  templateUrl: './store-eventos-page.component.html',
  styleUrls: ['./store-eventos-page.component.scss']
})
export class StoreEventosPageComponent implements OnInit {

  dataList$: Observable<any>
  constructor(private service: EventoService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll();
  }

}
