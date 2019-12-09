import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ein-store-inscricao-edit',
  templateUrl: './store-inscricao-edit.component.html',
  styleUrls: ['./store-inscricao-edit.component.scss']
})
export class StoreInscricaoEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }
  onSave(event: any) {
    console.log('roteando' + event.evento.oid)
    this.router.navigate(['/store', event.evento.oid, 'eventos']);
  }
}
