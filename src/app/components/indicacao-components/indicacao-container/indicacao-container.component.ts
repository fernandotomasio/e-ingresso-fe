import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IndicacaoService } from '../../../core/indicacao.service';

@Component({
  selector: 'ein-indicacao-repository',
  templateUrl: './indicacao-container.component.html',
  styleUrls: ['./indicacao-container.component.scss']
})
export class IndicacaoContainerComponent implements OnInit {

  @Input() eventoOid: number;
  @Output() action = new EventEmitter<any>();
  dataList: any;

  constructor(private service: IndicacaoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.findAll({ eventoOids: [ this.eventoOid ] } ).subscribe(response => {
        this.dataList = response.data;
      }
    );

  }

  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }
}
