import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMangaComponent } from './details-manga.component';

describe('DetailsMangaComponent', () => {
  let component: DetailsMangaComponent;
  let fixture: ComponentFixture<DetailsMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
