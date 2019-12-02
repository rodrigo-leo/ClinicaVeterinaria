import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarcitaComponent } from './programarcita.component';

describe('ProgramarcitaComponent', () => {
  let component: ProgramarcitaComponent;
  let fixture: ComponentFixture<ProgramarcitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramarcitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
