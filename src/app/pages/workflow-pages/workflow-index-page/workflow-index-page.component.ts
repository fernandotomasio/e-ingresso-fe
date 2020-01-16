import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../app.service';
@Component({
  selector: 'ein-workflow-index-page',
  templateUrl: './workflow-index-page.component.html',
  styleUrls: ['./workflow-index-page.component.scss']
})
export class WorkflowIndexPageComponent implements OnInit {
  eventoOid: number;
  indicacaoOid: number;
  organizations: []

  constructor(private route: ActivatedRoute,
              private router: Router,
              private appService: AppService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventoOid = params.eventoOid;
    });
    this.organizations = this.appService.getOrganizations();
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
