import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoStarsComponent } from './avaliacao-stars.component';

describe('AvaliacaoStarsComponent', () => {
  let component: AvaliacaoStarsComponent;
  let fixture: ComponentFixture<AvaliacaoStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoStarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
