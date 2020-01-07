import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ein-proposta-container',
  templateUrl: './proposta-container.component.html',
  styleUrls: ['./proposta-container.component.scss']
})
export class PropostaContainerComponent implements OnInit {

  oid: number;

  data: any = {
    indicacoes: [
      {
        oid: 1
      },
      {
        oid: 2
      },
      {
        oid: 4
      },
      {
        oid: 5
      },
      {
        oid: 6
      },
      {
        oid: 7
      },
      {
        oid: 8
      },
      {
        oid: 9
      },
      {
        oid: 10
      },
      {
        oid: 11
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
