import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDeSaludComponent } from './red-de-salud.component';

describe('RedDeSaludComponent', () => {
  let component: RedDeSaludComponent;
  let fixture: ComponentFixture<RedDeSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedDeSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedDeSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
