import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ein-categoria-search',
  templateUrl: './categoria-search.component.html',
  styleUrls: ['./categoria-search.component.scss']
})
export class CategoriaSearchComponent implements OnInit {
  @Output() changed = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private service: CategoriaService) { }

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
