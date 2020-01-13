import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsPageComponent } from './movie-details-page.component';

describe('MovieDetailsPageComponent', () => {
  let component: MovieDetailsPageComponent;
  let fixture: ComponentFixture<MovieDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
