import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnChanges {

  @Input() saram: any
  url: any

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.url = `${environment.api_endpoint}/api/v1/pessoas/${this.saram}/avatar`;
  }

}
