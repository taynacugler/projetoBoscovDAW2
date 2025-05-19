import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoTextComponent } from './avaliacao-text.component';

describe('AvaliacaoTextComponent', () => {
  let component: AvaliacaoTextComponent;
  let fixture: ComponentFixture<AvaliacaoTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
