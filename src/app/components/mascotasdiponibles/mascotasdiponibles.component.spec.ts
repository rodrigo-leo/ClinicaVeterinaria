import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasdiponiblesComponent } from './mascotasdiponibles.component';

describe('MascotasdiponiblesComponent', () => {
  let component: MascotasdiponiblesComponent;
  let fixture: ComponentFixture<MascotasdiponiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasdiponiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasdiponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
