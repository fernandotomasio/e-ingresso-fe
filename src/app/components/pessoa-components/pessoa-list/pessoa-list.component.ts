import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../../../core/pessoa.service';
import {Observable} from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'ein-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  dataList$: Observable<any>

  paginateOptions = []

  totalCount: number;

  filteredCount: number;


  dataSearch = {
    paginate: 'true',
    size: '10',
    page: '0',
    orderBy: []
  }


  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll({});
  }

  onPageChange(event: PageEvent) {
    console.log(event);
  }


}
