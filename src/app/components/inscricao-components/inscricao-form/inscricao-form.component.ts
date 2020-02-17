import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscricaoService } from '../../../core/inscricao.service';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ein-inscricao-form',
  templateUrl: './inscricao-form.component.html',
  styleUrls: ['./inscricao-form.component.scss']
})
export class InscricaoFormComponent implements OnInit {

  form: FormGroup;
  @Output() saved = new EventEmitter<any>()
  @Output() canceled = new EventEmitter();
  @Input() eventoOid: any
  @Input() oid: any

  constructor(private service: InscricaoService,
              private appService: AppService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      oid: this.fb.control(''),
      pessoaOid: this.appService.getUser().oid,
      eventoOid: this.eventoOid,
      email: this.fb.control('', [Validators.required, Validators.maxLength(255), Validators.email]),
      telefone: this.fb.control('', [Validators.required, Validators.maxLength(255)]),
      justificativa: this.fb.control(''),
      observacoes: this.fb.control(''),
    });

    if (this.oid) {
      this.service.find(this.oid)
        .subscribe(data => {
            this.form.patchValue({
              pessoaOid: data.pessoa.oid,
              eventoOid: data.evento.oid,
              ...data
            });
          }
        );
    }

  }

  submit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(response => {
        this.saved.emit(response);
      });
    }
  }




}
