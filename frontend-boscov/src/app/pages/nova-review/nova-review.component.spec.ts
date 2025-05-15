import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaReviewComponent } from './nova-review.component';

describe('NovaReviewComponent', () => {
  let component: NovaReviewComponent;
  let fixture: ComponentFixture<NovaReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
