import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarMiniComponent } from './avatar-mini.component';

describe('AvatarComponent', () => {
  let component: AvatarMiniComponent;
  let fixture: ComponentFixture<AvatarMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
