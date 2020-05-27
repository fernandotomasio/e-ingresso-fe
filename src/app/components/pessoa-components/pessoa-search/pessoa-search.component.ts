import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from '../../../core/categoria.service';
import {OrganizacaoService} from "../../../core/organizacao.service";

@Component({
  selector: 'app-pessoa-search',
  templateUrl: './pessoa-search.component.html',
  styleUrls: ['./pessoa-search.component.scss']
})
export class PessoaSearchComponent implements OnInit {

  @Output() changed = new EventEmitter();
  form: FormGroup;
  organizacoes = [];

  constructor(private fb: FormBuilder,
              private organizacaoService: OrganizacaoService,) { }

  ngOnInit() {
    this.organizacaoService.findAll({}).subscribe(response => {
      this.organizacoes = response.data;
    })
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      q: this.fb.control('')
    });
  }

  raiseChanged(form: FormGroup) {
    this.changed.emit(form.value);
  }

  submit() {
    if (this.form.valid) {
      this.raiseChanged(this.form);
    }
  }
}
