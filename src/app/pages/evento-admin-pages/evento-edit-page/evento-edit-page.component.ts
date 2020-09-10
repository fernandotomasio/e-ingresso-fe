import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-evento-edit-page',
  templateUrl: './evento-edit-page.component.html',
  styleUrls: ['./evento-edit-page.component.scss']
})
export class EventoEditPageComponent implements OnInit {

  oid: number;
  acceptedRedirects: any = {
    cancel: () => this.router.navigate(['/eventos']),
    save: (oid) => this.router.navigate(['/eventos', oid, 'detail'])
  };

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oid = params.oid;
    });
  }

  onAction(event: any) {
    const { oid, action } = event;
    const handleRedirect = this.acceptedRedirects[action];
    handleRedirect(oid);
  }
}
