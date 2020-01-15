import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PropostaService } from '../../../core/proposta.service';

@Component({
  selector: 'ein-proposta-container',
  templateUrl: './proposta-container.component.html',
  styleUrls: ['./proposta-container.component.scss']
})
export class PropostaContainerComponent implements OnInit {

  oid: number;
  @Output() action = new EventEmitter<any>();
  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter();

  data: any;

  constructor(private service: PropostaService) { }

  ngOnInit() {
    this.reset();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.data.itensProposta, event.previousIndex, event.currentIndex);
    } else {
      this.data.itensProposta.splice(event.currentIndex, 0,
        { indicacao: event.previousContainer.data[event.previousIndex] });
      console.log(this.data.itensProposta);

    }
  }

  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }

  submit() {
    this.data.itensProposta = this.data.itensProposta.map((item, index) => ({...item, prioridade: index + 1}) );
    this.service.save(this.data).subscribe(response => {
      if (response) {
        this.data = {
          oid: response.oid,
          statusProposta: response.status,
          organizacaoMilitarOid: response.organizacaoMilitar.oid,
          eventoOid: response.evento.oid,
          itensProposta: response.itensProposta
        };
      }
      this.saved.emit(response);
    });
  }
  remove() {
    this.service.remove(this.data.oid).subscribe(response => {
      this.reset();
    });
  }
  reset() {
    this.data = {
      oid: '',
      organizacaoMilitarOid: 8001,
      eventoOid: 2007,
      statusProposta: 'ABERTA',
      itensProposta: [

      ]
    };
  }
}
