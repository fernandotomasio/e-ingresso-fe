import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from '../../../core/pessoa.service';

@Component({
  selector: 'ein-pessoa-select',
  templateUrl: './pessoa-select.component.html',
  styleUrls: ['./pessoa-select.component.scss']
})
export class PessoaSelectComponent implements OnInit {

  @Output() selected = new EventEmitter<number>();
  @Output() canceled = new EventEmitter();

  dataList: any;
  form: FormGroup;

  displayedColumns: string[] = ['control', 'nome'];

  constructor(private fb: FormBuilder, private service: PessoaService) { }

  ngOnInit() {
    this.form = this.fb.group({
      oid: this.fb.control('', Validators.required),
    });
    this.loadData();
  }

  loadData() {
    this.service.findAll({}).subscribe(response => {
      this.dataList = response.data;
    });
  }

  onSubmit() {
    this.selected.emit(this.form.get('oid').value);
  }
  onCancel() {
    this.canceled.emit('canceled');
  }

}
