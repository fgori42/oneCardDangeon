import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tail } from './tail';

describe('Tail', () => {
  let component: Tail;
  let fixture: ComponentFixture<Tail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tail],
    }).compileComponents();

    fixture = TestBed.createComponent(Tail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
