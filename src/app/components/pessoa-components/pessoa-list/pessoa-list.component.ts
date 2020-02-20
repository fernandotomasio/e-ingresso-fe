import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PessoaService} from '../../../core/pessoa.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  @Output() action = new EventEmitter<any>();
  titulo = 'Lista de Pessoas';

  dataList = [];

  filteredCount: number;

  displayedColumns: string[] = ['avatar', 'oid', 'cpf', 'nome', 'saram', 'controls'];

  paginateOptions = [];

  dataSearch = {
    paginate: 'true',
    size: 10,
    page: 0,
    orderBy: []
  }

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.service.findAll(this.dataSearch).subscribe( response => {
      this.dataList = response.data;
      this.filteredCount = response.filteredCount
    });

  }
  raiseAction(action: string, oid: number) {
    this.action.emit({
      action,
      oid
    });
  }

  onPageChange(event: PageEvent) {
    this.dataSearch.size = event.pageSize
    this.dataSearch.page = event.pageIndex
    this.refresh();
  }


  onSearchChange(event) {
    this.dataSearch = Object.assign(this.dataSearch, { page: '0'})
    this.dataSearch = Object.assign(this.dataSearch, event)
    this.refresh();
  }

}
