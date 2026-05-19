import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenStep } from './children-step';

describe('ChildrenStep', () => {
  let component: ChildrenStep;
  let fixture: ComponentFixture<ChildrenStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
