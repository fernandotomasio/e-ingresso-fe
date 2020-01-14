import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ein-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss']
})
export class LoggedUserComponent implements OnInit {

  user = {}

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.user = this.appService.getUser();
  }

}
