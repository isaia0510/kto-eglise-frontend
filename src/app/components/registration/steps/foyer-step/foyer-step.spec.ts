import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerStep } from './foyer-step';

describe('FoyerStep', () => {
  let component: FoyerStep;
  let fixture: ComponentFixture<FoyerStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoyerStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
