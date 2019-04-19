import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMangaComponent } from './all-manga.component';

describe('AllMangaComponent', () => {
  let component: AllMangaComponent;
  let fixture: ComponentFixture<AllMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
