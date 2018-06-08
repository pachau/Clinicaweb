import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDIRESAComponent } from './creacion-diresa.component';

describe('CreacionDIRESAComponent', () => {
  let component: CreacionDIRESAComponent;
  let fixture: ComponentFixture<CreacionDIRESAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionDIRESAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionDIRESAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
