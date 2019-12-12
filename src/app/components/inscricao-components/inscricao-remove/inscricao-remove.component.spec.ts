import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoRemoveComponent } from './inscricao-remove.component';

describe('InscricaoRemoveComponent', () => {
  let component: InscricaoRemoveComponent;
  let fixture: ComponentFixture<InscricaoRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscricaoRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricaoRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
