import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { EventoService } from '../../../core/evento.service';
@Component({
  selector: 'app-workflow-index-page',
  templateUrl: './workflow-index-page.component.html',
  styleUrls: ['./workflow-index-page.component.scss']
})
export class WorkflowIndexPageComponent implements OnInit {
  eventoOid: number;
  evento: any;
  indicacaoOid: number;
  organization: any
  organizations: []
  odsas: []

  constructor(private route: ActivatedRoute,
              private router: Router,
              private appService: AppService,
              private eventoService: EventoService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventoOid = params.eventoOid;
    });
    this.organizations = this.appService.getOrganizations();
    this.organization = this.appService.getOrganization();
    this.odsas = this.appService.getOdsas().data.filter(item => item.oid !== this.organization.oid);
    this.eventoService.find(this.eventoOid).subscribe(response => {
      this.evento = response;
      console.log(this.evento);
    });

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onAction(event: any) {
    this.indicacaoOid = event.oid;
  }
}
