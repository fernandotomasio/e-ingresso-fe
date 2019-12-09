import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ein-store-indicacao-edit',
  templateUrl: './store-indicacao-edit.component.html',
  styleUrls: ['./store-indicacao-edit.component.scss']
})
export class StoreIndicacaoEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }
  onSave(event: any) {
    console.log('roteando' + event.evento.oid)
    this.router.navigate(['/store', 'eventos',  event.evento.oid]);
  }

}
