import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter();

  constructor(private service: IndicacaoService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      pessoaOid: 3077,
      eventoOid: 2001,
      email: this.fb.control('', [Validators.required, Validators.maxLength(255), Validators.email]),
      telefone: this.fb.control('', [Validators.required, Validators.maxLength(255)]),
      justificativa: this.fb.control(''),
      observacoes: this.fb.control(''),
    });

  }

  submit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(response => {
        this.saved.emit(response);
      });
    }
  }


}
