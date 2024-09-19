import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceAssistanceComponent } from './compliance-assistance.component';

describe('ComplianceAssistanceComponent', () => {
  let component: ComplianceAssistanceComponent;
  let fixture: ComponentFixture<ComplianceAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplianceAssistanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
