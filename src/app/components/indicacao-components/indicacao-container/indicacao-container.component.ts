import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IndicacaoService } from '../../../core/indicacao.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-indicacao-repository',
  templateUrl: './indicacao-container.component.html',
  styleUrls: ['./indicacao-container.component.scss']
})
export class IndicacaoContainerComponent implements OnInit {

  @Input() eventoOid: number;
  @Input() organizacaoOid: any;
  @Output() action = new EventEmitter<any>();
  dataList: any;

  constructor(private service: IndicacaoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.findAll({ eventoOids: [ this.eventoOid ], organizacaoSolicitanteOids: [ this.organizacaoOid ] } ).subscribe(response => {
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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.container)
      moveItemInArray(this.dataList, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  getUrl(saram: any) {
    return `${environment.api_endpoint}/api/v1/pessoas/${saram}/thumbnail`;
  }
}
