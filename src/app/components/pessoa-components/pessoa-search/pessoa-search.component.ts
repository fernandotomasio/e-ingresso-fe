import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from '../../../core/categoria.service';

@Component({
  selector: 'ein-pessoa-search',
  templateUrl: './pessoa-search.component.html',
  styleUrls: ['./pessoa-search.component.scss']
})
export class PessoaSearchComponent implements OnInit {

  @Output() changed = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

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
