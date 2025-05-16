import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityInfoComponent } from './security-info.component';

describe('SecurityInfoComponent', () => {
  let component: SecurityInfoComponent;
  let fixture: ComponentFixture<SecurityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecurityInfoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the security info component', () => {
    expect(component).toBeTruthy();
  });
});
