import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndicacaoService } from '../../../core/indicacao.service';
import { InscricaoService } from '../../../core/inscricao.service';

@Component({
  selector: 'app-store-inscricao-edit',
  templateUrl: './store-inscricao-edit.component.html',
  styleUrls: ['./store-inscricao-edit.component.scss']
})
export class StoreInscricaoEditComponent implements OnInit {

  eventoOid: number;
  oid: number;

  constructor(private service: InscricaoService,
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
