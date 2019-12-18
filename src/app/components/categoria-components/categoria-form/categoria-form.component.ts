import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from '../../../core/categoria.service';

@Component({
  selector: 'ein-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  @Input() oid: number;

  data$: Observable<any>;

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.data$ = this.service.find(this.oid);
  }

}
