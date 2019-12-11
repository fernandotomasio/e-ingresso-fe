import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ein-store-indicacao-edit',
  templateUrl: './store-indicacao-edit.component.html',
  styleUrls: ['./store-indicacao-edit.component.scss']
})
export class StoreIndicacaoEditComponent implements OnInit {

  eventoOid: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventoOid = params.oid;
    });
  }

  onSave(event: any) {
    this.router.navigate(['/store', 'eventos',  event.evento.oid]);
  }

}
