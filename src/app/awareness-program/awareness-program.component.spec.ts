import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessProgramComponent } from './awareness-program.component';

describe('AwarenessProgramComponent', () => {
  let component: AwarenessProgramComponent;
  let fixture: ComponentFixture<AwarenessProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwarenessProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwarenessProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
