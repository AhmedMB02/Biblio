import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreCard } from './livre-card';

describe('LivreCard', () => {
  let component: LivreCard;
  let fixture: ComponentFixture<LivreCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
