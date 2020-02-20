import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pessoa-detail-page',
  templateUrl: './pessoa-detail-page.component.html',
  styleUrls: ['./pessoa-detail-page.component.scss']
})
export class PessoaDetailPageComponent implements OnInit {

  oid: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oid = params.oid;
    });
  }
}
