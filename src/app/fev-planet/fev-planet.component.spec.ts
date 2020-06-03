import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FevPlanetComponent } from './fev-planet.component';

describe('FevPlanetComponent', () => {
  let component: FevPlanetComponent;
  let fixture: ComponentFixture<FevPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FevPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FevPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
