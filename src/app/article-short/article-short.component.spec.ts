import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleShortComponent } from './article-short.component';

describe('ArticleShortComponent', () => {
  let component: ArticleShortComponent;
  let fixture: ComponentFixture<ArticleShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleShortComponent]
    });
    fixture = TestBed.createComponent(ArticleShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
