import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapboxMapComponent } from './mapbox-map.component';

describe('MapboxMapComponent', () => {
  let component: MapboxMapComponent;
  let fixture: ComponentFixture<MapboxMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapboxMapComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MapboxMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create mapbox map component', () => {
    expect(component).toBeTruthy();
  });
});
