import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoLegalComponent } from './marco-legal.component';

describe('MarcoLegalComponent', () => {
  let component: MarcoLegalComponent;
  let fixture: ComponentFixture<MarcoLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
