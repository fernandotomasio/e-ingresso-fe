import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEventosDetailComponent } from './store-eventos-detail.component';

describe('StoreEventosDetailComponent', () => {
  let component: StoreEventosDetailComponent;
  let fixture: ComponentFixture<StoreEventosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEventosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEventosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
