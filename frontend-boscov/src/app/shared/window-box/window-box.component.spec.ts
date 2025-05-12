import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowBoxComponent } from './window-box.component';

describe('WindowBoxComponent', () => {
  let component: WindowBoxComponent;
  let fixture: ComponentFixture<WindowBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
