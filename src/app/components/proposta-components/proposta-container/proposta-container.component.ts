import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PropostaService } from '../../../core/proposta.service';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-proposta-container',
  templateUrl: './proposta-container.component.html',
  styleUrls: ['./proposta-container.component.scss']
})
export class PropostaContainerComponent implements OnInit {
  @Output() action = new EventEmitter<any>();

  @Input() eventoOid: any;
  @Input() organizacaoOid: number;
  dataList: any;

  constructor(private service: PropostaService) { }

  ngOnInit() {
    this.service.findAll({ eventoOids: this.eventoOid, organizacaoMilitarOids: this.organizacaoOid } )
      .subscribe(response => {
        if (response.filteredCount === 1) {
          this.dataList = response.data[0].itensProposta.map(item => item.indicacao);
        }
      });
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
