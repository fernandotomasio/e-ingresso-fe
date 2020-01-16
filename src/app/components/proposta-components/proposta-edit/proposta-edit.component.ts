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
  organizacaoOid: number = 8001;

  data: any;

  constructor(private service: PropostaService, private appService: AppService) { }

  ngOnInit() {
    this.organizacaoOid = this.appService.getOrganization().oid;
    this.reset();
    this.service.findAll({ eventoOids: this.eventoOid, organizacaoMilitarOids: this.organizacaoOid } )
      .subscribe(response => {
        if (response.filteredCount === 1) {
          this.data = {
            oid: response.data[0].oid,
            statusProposta: response.data[0].status,
            organizacaoMilitarOid: response.data[0].organizacaoMilitar.oid,
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
      organizacaoMilitarOid: this.organizacaoOid,
      eventoOid: this.eventoOid,
      statusProposta: 'ABERTA',
      itensProposta: [

      ]
    };
  }
}
