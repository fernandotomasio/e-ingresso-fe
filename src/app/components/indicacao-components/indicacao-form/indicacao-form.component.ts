import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscricaoService } from '../../../core/inscricao.service';
import { IndicacaoService } from '../../../core/indicacao.service';

@Component({
  selector: 'ein-indicacao-form',
  templateUrl: './indicacao-form.component.html',
  styleUrls: ['./indicacao-form.component.scss']
})
export class IndicacaoFormComponent implements OnInit {

  form: FormGroup;
  @Input() oid: any
  @Input() eventoOid: any
  @Input() inscricaoOid: any
  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter();

  constructor(private service: IndicacaoService,
              private inscricaoService: InscricaoService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      oid: this.fb.control(''),
      pessoaOid: this.fb.control('', Validators.required),
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
    if (this.inscricaoOid) {
      this.inscricaoService.find(this.inscricaoOid)
        .subscribe(data => {
            this.form.patchValue({
              pessoaOid: data.pessoa.oid,
              eventoOid: data.evento.oid,
              email: data.email,
              telefone: data.telefone,
              inscricaoOid: this.inscricaoOid
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
