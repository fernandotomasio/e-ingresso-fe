import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../core/evento.service';

@Component({
  selector: 'ein-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  dataList = [];

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.service.findAll().subscribe(response =>{
      this.dataList = response.data;
    });
  }

}
