import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsAndConditionsPage } from './terms-and-conditions.page';

describe('TermsAndConditionsPage', () => {
  let component: TermsAndConditionsPage;
  let fixture: ComponentFixture<TermsAndConditionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsAndConditionsPage]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsAndConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the terms and conditions page', () => {
    expect(component).toBeTruthy();
  });
});
