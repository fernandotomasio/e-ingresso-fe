import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PropostaService } from '../../../core/proposta.service';
import { AppService } from '../../../app.service';

@Component({
  selector: 'ein-proposta-edit',
  templateUrl: './proposta-edit.component.html',
  styleUrls: ['./proposta-edit.component.scss']
})
export class PropostaEditComponent implements OnInit {

  oid: number;
  @Output() action = new EventEmitter<any>();
  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter();

  @Input() eventoOid: any;
  @Input() organizacaoOid: any

  data: any;

  constructor(private service: PropostaService, private appService: AppService) { }

  ngOnInit() {
    this.reset();
    this.service.findAll({ eventoOids: this.eventoOid, organizacaoMilitarOids: this.organizacaoOid } )
      .subscribe(response => {
        console.log(response)
        if (response.filteredCount === 1) {
          this.data = {
            oid: response.data[0].oid,
            statusProposta: response.data[0].status,
            organizacaoMilitarOid: response.data[0].organizacao.oid,
            eventoOid: response.data[0].evento.oid,
            itensProposta: response.data[0].itensProposta
          };
        }
      });

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
          organizacaoMilitarOid: response.organizacao.oid,
          eventoOid: response.evento.oid,
          itensProposta: response.itensProposta
        };
      }
      this.saved.emit(response);
    });
  }

  send() {
    this.service.send(this.data.oid).subscribe(response => {

    });
  }

  reset() {
    this.data = {
      oid: '',
      organizacaoMilitarOid: this.organizacaoOid,
      eventoOid: this.eventoOid,
      statusProposta: 'ABERTA',
      itensProposta: [

      ]
    };
  }
}
