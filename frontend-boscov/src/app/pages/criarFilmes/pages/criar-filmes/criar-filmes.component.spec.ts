import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFilmesComponent } from './criar-filmes.component';

describe('CriarFilmesComponent', () => {
  let component: CriarFilmesComponent;
  let fixture: ComponentFixture<CriarFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarFilmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
