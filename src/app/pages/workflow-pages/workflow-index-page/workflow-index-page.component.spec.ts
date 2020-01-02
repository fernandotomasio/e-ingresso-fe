import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowIndexPageComponent } from './workflow-index-page.component';

describe('WorkflowIndexPageComponent', () => {
  let component: WorkflowIndexPageComponent;
  let fixture: ComponentFixture<WorkflowIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowIndexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
