import { Component, Input, OnInit } from '@angular/core';
import { InscricaoService } from '../../../core/inscricao.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ein-inscricao-list',
  templateUrl: './inscricao-list.component.html',
  styleUrls: ['./inscricao-list.component.scss']
})
export class InscricaoListComponent implements OnInit {

  @Input() eventoOid: number;
  dataList$: Observable<any>;

  constructor(private service: InscricaoService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll();
  }

}
