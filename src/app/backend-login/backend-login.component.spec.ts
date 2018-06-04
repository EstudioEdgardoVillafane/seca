import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendLoginComponent } from './backend-login.component';

describe('BackendLoginComponent', () => {
  let component: BackendLoginComponent;
  let fixture: ComponentFixture<BackendLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
