import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFeatureoneComponent } from './form-featureone.component';

describe('FormFeatureoneComponent', () => {
  let component: FormFeatureoneComponent;
  let fixture: ComponentFixture<FormFeatureoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFeatureoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFeatureoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
