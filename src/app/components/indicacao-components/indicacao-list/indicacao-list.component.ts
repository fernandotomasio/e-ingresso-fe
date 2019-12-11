import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InscricaoService } from '../../../core/inscricao.service';
import { IndicacaoService } from '../../../core/indicacao.service';

@Component({
  selector: 'ein-indicacao-list',
  templateUrl: './indicacao-list.component.html',
  styleUrls: ['./indicacao-list.component.scss']
})
export class IndicacaoListComponent implements OnInit {

  @Input() eventoOid: number;
  dataList$: Observable<any>;

  constructor(private service: IndicacaoService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll({ eventoOids: [ this.eventoOid ] } );
  }

}
