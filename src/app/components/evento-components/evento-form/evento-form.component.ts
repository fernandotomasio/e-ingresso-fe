import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoService } from '../../../core/evento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ein-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent implements OnInit {

  @Input() oid: number;
  form: FormGroup;
  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter();


  categorias: any;

  data$: Observable<any>;

  statusEventos: any = [
    {value: 'ABERTO', viewValue: 'Evento aberto'},
    {value: 'FINALIZADO', viewValue: 'Evento finalizado'}
  ];

  constructor(private service: EventoService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.data$ = this.service.find(this.oid);

    this.form = this.fb.group({

      oid: this.fb.control(''),

      sigla: this.fb.control('', Validators.required),

      nome: this.fb.control('', Validators.required),

      descricao: this.fb.control(''),

      categoriaOid: this.fb.control('', Validators.required),

      statusEvento: this.fb.control('', Validators.required),

      dataInicio: this.fb.control(''),

      dataTermino: this.fb.control(''),

      dataInicioIndicacao: this.fb.control(''),

      dataTerminoIndicacao: this.fb.control(''),

      ticket: this.fb.control('', Validators.required),

      observacoes: this.fb.control(''),

    });

  }

  onCancel() {
    this.canceled.emit('canceled');
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(response => {
        this.saved.emit(response);
      });
    }
  }

}
