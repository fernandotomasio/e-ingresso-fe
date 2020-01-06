import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndicacaoService } from '../../../core/indicacao.service';

@Component({
  selector: 'ein-store-indicacao-edit',
  templateUrl: './store-indicacao-edit.component.html',
  styleUrls: ['./store-indicacao-edit.component.scss']
})
export class StoreIndicacaoEditComponent implements OnInit {

  eventoOid: number;
  oid: number;

  constructor(private service: IndicacaoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventoOid = params.eventoOid;
      this.oid = params.oid;
    });
  }

  onSave(event: any) {
    if (!event) {
      this.service.find(this.oid).subscribe(response => {
        this.eventoOid = response.evento.oid;
        this.router.navigate(['/store', 'eventos', this.eventoOid]);
      });
    } else {
      this.router.navigate(['/store', 'eventos', event.evento.oid ]);
    }

  }

}
