import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadinessReviewComponent } from './readiness-review.component';

describe('ReadinessReviewComponent', () => {
  let component: ReadinessReviewComponent;
  let fixture: ComponentFixture<ReadinessReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadinessReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadinessReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
