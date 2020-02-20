import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-edit-page',
  templateUrl: './categoria-edit-page.component.html',
  styleUrls: ['./categoria-edit-page.component.scss']
})
export class CategoriaEditPageComponent implements OnInit {

  oid: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oid = params.oid;
    });


  }
  onSave(event: any) {
    this.router.navigate(['/categorias', (event ? event.oid : this.oid), 'detail']);
  }
}
