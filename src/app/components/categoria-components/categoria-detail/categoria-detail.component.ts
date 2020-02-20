import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from '../../../core/categoria.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.scss']
})
export class CategoriaDetailComponent implements OnInit {

  @Input() oid: number;

  data$: Observable<any>;

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.data$ = this.service.find(this.oid);
  }

}
