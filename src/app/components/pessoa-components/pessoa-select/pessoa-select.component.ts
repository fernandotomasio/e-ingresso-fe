import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from '../../../core/pessoa.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'ein-pessoa-select',
  templateUrl: './pessoa-select.component.html',
  styleUrls: ['./pessoa-select.component.scss']
})
export class PessoaSelectComponent implements OnInit {

  @Output() selected = new EventEmitter<number>();
  @Output() canceled = new EventEmitter();

  dataList: any;

  displayedColumns: string[] = ['control', 'avatar', 'nome', 'cpf', 'email'];

  paginateOptions = []

  dataSearch = {
    paginate: 'true',
    size: 5,
    page: 0,
    orderBy: []
  }

  filteredCount: number;

  form: FormGroup;


  constructor(private fb: FormBuilder, private service: PessoaService) { }

  ngOnInit() {
    this.form = this.fb.group({
      oid: this.fb.control('', Validators.required),
    });
    this.refresh();
  }

  refresh() {
    this.service.findAll(this.dataSearch).subscribe(response => {
      this.dataList = response.data;
      this.filteredCount = response.filteredCount;
    });
  }

  onSubmit() {
    this.selected.emit(this.form.get('oid').value);
  }
  onCancel() {
    this.canceled.emit('canceled');
  }

  onPageChange(event: PageEvent) {
    this.dataSearch.size = event.pageSize
    this.dataSearch.page = event.pageIndex
    this.refresh();

  }
  onSearchChange(event) {
    this.dataSearch = Object.assign(this.dataSearch, { page: 0})
    this.dataSearch = Object.assign(this.dataSearch, event)
    this.refresh();
  }


}
