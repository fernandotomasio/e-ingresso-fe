import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../../../core/pessoa.service';

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

  constructor(private service: PessoaService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      oid: this.fb.control(''),
      nome: this.fb.control('', Validators.required),
      saram: this.fb.control(''),
      cpf: this.fb.control('', Validators.required),

    });

    if (this.oid) {
      this.service.find(this.oid)
        .subscribe(data =>
          this.form.patchValue(data));
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
