import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-avatar-mini',
  templateUrl: './avatar-mini.component.html',
  styleUrls: ['./avatar-mini.component.scss']
})
export class AvatarMiniComponent implements OnChanges {

  @Input() saram: any
  url: any

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    this.url = `${environment.api_endpoint}/api/v1/pessoas/${this.saram}/thumbnail`;

  }

}
