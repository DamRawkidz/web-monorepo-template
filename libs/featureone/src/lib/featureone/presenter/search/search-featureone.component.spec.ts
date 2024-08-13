import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFeatureoneComponent } from './search-featureone.component';

describe('SearchFeatureoneComponent', () => {
  let component: SearchFeatureoneComponent;
  let fixture: ComponentFixture<SearchFeatureoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFeatureoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFeatureoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
