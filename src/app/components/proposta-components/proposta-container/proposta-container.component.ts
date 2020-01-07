import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ein-proposta-container',
  templateUrl: './proposta-container.component.html',
  styleUrls: ['./proposta-container.component.scss']
})
export class PropostaContainerComponent implements OnInit {

  oid: number;
  @Output() action = new EventEmitter<any>();
  data: any = {
    oid: '',
    organizacao: {
    },
    status: 'ABERTO',
    indicacoes: [

    ]
  };

  constructor() { }


  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log('igual', event.container.data);
      moveItemInArray(this.data.indicacoes, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }

  submit() {
    console.log(this.data);
  }
}
