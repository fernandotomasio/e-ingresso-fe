import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IndicacaoService } from '../../../core/indicacao.service';

@Component({
  selector: 'app-indicacao-detail',
  templateUrl: './indicacao-detail.component.html',
  styleUrls: ['./indicacao-detail.component.scss']
})
export class IndicacaoDetailComponent implements OnInit, OnChanges {

  @Input() oid: number;

  data: any;

  constructor(private service: IndicacaoService) { }

  ngOnInit() {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  refresh() {
    if (this.oid) {
      this.service.find(this.oid).subscribe(response => {
        this.data = response;
      });
    }
  }

}
