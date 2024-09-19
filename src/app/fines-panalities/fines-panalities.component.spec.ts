import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinesPanalitiesComponent } from './fines-panalities.component';

describe('FinesPanalitiesComponent', () => {
  let component: FinesPanalitiesComponent;
  let fixture: ComponentFixture<FinesPanalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinesPanalitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinesPanalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
