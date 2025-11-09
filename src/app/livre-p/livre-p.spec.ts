import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreP } from './livre-p';

describe('LivreP', () => {
  let component: LivreP;
  let fixture: ComponentFixture<LivreP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
