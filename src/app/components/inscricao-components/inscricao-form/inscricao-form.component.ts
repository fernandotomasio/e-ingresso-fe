import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ein-inscricao-form',
  templateUrl: './inscricao-form.component.html',
  styleUrls: ['./inscricao-form.component.scss']
})
export class InscricaoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.maxLength(255), Validators.email]),
      telefone: this.fb.control('', [Validators.required, Validators.maxLength(255)]),
      justificativa: this.fb.control(''),
      observacoes: this.fb.control(''),
    });

  }

}
