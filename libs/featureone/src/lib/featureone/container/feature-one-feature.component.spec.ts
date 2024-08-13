import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOneFeatureComponent } from './feature-one-feature.component';

describe('FeatureOneFeatureComponent', () => {
  let component: FeatureOneFeatureComponent;
  let fixture: ComponentFixture<FeatureOneFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOneFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOneFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
