import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evento-edit-page',
  templateUrl: './evento-edit-page.component.html',
  styleUrls: ['./evento-edit-page.component.scss']
})
export class EventoEditPageComponent implements OnInit {

  oid: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oid = params.oid;
    });
  }

  onSave(event: any) {
    this.router.navigate(['/eventos', (event ? event.oid : this.oid), 'detail']);
  }


}
