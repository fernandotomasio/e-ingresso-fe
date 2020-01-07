import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IndicacaoService } from '../../../core/indicacao.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

}
