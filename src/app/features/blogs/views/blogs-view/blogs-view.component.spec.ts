import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsViewComponent } from './blogs-view.component';

describe('BlogsViewComponent', () => {
  let component: BlogsViewComponent;
  let fixture: ComponentFixture<BlogsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
