import {Component, Input, OnInit} from '@angular/core';
import {PessoaService} from '../../../core/pessoa.service';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.scss']
})
export class PessoaDetailComponent implements OnInit {

  @Input() oid: number;

  data: any;

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.service.find(this.oid).subscribe(response => {
      this.data = response;
    });
  }


}
