import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IndicacaoService } from '../../../core/indicacao.service';
import { InscricaoService } from '../../../core/inscricao.service';

@Component({
  selector: 'app-inscricao-search',
  templateUrl: './inscricao-search.component.html',
  styleUrls: ['./inscricao-search.component.scss']
})
export class InscricaoSearchComponent implements OnInit {

  @Output() changed = new EventEmitter();
  form: FormGroup;

  paginateOptions = []

  totalCount: number;

  filteredCount: number;


  dataSearch = {
    paginate: 'true',
    size: '10',
    page: '0',
    orderBy: []
  }

  constructor(private fb: FormBuilder,
              private service: InscricaoService) { }

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
