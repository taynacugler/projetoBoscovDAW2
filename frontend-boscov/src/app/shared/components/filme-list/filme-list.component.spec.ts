import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeListComponent } from './filme-list.component';

describe('FilmeListComponent', () => {
  let component: FilmeListComponent;
  let fixture: ComponentFixture<FilmeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
