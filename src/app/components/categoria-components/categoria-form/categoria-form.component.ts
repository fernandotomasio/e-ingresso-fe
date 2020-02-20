import { Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit  {

  @Input() oid: number;
  form: FormGroup;
  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter();

  constructor(private service: CategoriaService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      oid: this.fb.control(''),
      titulo: this.fb.control('', Validators.required),
      descricao: this.fb.control(''),
      imageUrl: this.fb.control('', Validators.required)
    });

    if (this.oid) {
      this.service.find(this.oid)
        .subscribe(data =>
          this.form.patchValue({
            oid: data.oid,
            titulo: data.titulo,
            descricao: data.descricao,
            imageUrl: data.imageUrl
          }));
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(response => {
        this.saved.emit(response);
      });
    }
  }

  onCancel() {
    this.canceled.emit('canceled');
  }

}
