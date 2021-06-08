import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceProvidersComponent } from './insurance-providers.component';

describe('InsuranceProvidersComponent', () => {
  let component: InsuranceProvidersComponent;
  let fixture: ComponentFixture<InsuranceProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
