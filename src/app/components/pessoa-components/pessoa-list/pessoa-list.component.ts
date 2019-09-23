import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../../../core/pessoa.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ein-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  dataList$: Observable<any>

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.dataList$ = this.service.findAll();
  }

}
