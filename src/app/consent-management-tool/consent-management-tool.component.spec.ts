import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentManagementToolComponent } from './consent-management-tool.component';

describe('ConsentManagementToolComponent', () => {
  let component: ConsentManagementToolComponent;
  let fixture: ComponentFixture<ConsentManagementToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsentManagementToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsentManagementToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
