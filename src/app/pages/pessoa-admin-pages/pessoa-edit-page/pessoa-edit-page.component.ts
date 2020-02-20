import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pessoa-edit-page',
  templateUrl: './pessoa-edit-page.component.html',
  styleUrls: ['./pessoa-edit-page.component.scss']
})
export class PessoaEditPageComponent implements OnInit {

  oid: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oid = params.oid;
    });


  }
  onSave(event: any) {
    this.router.navigate(['/pessoas', (event ? event.oid : this.oid), 'detail']);
  }

}
