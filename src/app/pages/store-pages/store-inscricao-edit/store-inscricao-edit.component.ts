import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ein-store-inscricao-edit',
  templateUrl: './store-inscricao-edit.component.html',
  styleUrls: ['./store-inscricao-edit.component.scss']
})
export class StoreInscricaoEditComponent implements OnInit {

  eventoOid: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventoOid = params.oid;
    });
  }
  onSave(event: any) {
    this.router.navigate(['/store',  'eventos', event.evento.oid]);
  }
}
