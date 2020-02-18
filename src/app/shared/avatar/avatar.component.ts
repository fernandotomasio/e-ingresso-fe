import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ein-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() saram: any
  url: any

  constructor() { }

  ngOnInit() {
    this.url = `${environment.api_endpoint}/api/v1/pessoas/${this.saram}/thumbnail`;
  }

}
