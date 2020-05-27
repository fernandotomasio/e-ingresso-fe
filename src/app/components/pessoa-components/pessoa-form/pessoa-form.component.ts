import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../../../core/pessoa.service';
import {OrganizacaoService} from "../../../core/organizacao.service";
import {Observable} from "rxjs";
import {map, startWith, tap} from "rxjs/operators";


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  @Input() oid: number;
  form: FormGroup;
  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter();
  organizacoes = [];


  constructor(private pessoaService: PessoaService,
              private organizacaoService: OrganizacaoService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.organizacaoService.findAll({}).subscribe(response => {
      this.organizacoes = response.data;
    })
    this.form = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      oid: this.fb.control(''),
      nome: this.fb.control('', Validators.required),
      nomeGuerra: this.fb.control(''),
      saram: this.fb.control(''),
      cpf: this.fb.control('', Validators.required),
      email: this.fb.control('',[Validators.required, Validators.maxLength(255), Validators.email] ),
      telefone: this.fb.control(''),
      celular: this.fb.control(''),
      organizacaoOid: this.fb.control('', Validators.required)
    });


    if (this.oid) {
      this.pessoaService.find(this.oid)
        .subscribe(data =>
          this.form.patchValue(data));
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.pessoaService.save(this.form.value).subscribe(response => {
        this.saved.emit(response);
      });
    }
  }

  onCancel() {
    this.canceled.emit('canceled');
  }


}
