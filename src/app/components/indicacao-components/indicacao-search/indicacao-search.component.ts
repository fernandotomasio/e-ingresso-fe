import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from '../../../core/categoria.service';
import { IndicacaoService } from '../../../core/indicacao.service';

@Component({
  selector: 'app-indicacao-search',
  templateUrl: './indicacao-search.component.html',
  styleUrls: ['./indicacao-search.component.scss']
})
export class IndicacaoSearchComponent implements OnInit {

  @Output() changed = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private service: IndicacaoService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      q: this.fb.control(''),
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
