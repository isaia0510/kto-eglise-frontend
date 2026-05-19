import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsStep } from './parents-step';

describe('ParentsStep', () => {
  let component: ParentsStep;
  let fixture: ComponentFixture<ParentsStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentsStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
