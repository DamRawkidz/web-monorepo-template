import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFeatureoneComponent } from './list-featureone.component';

describe('ListFeatureoneComponent', () => {
  let component: ListFeatureoneComponent;
  let fixture: ComponentFixture<ListFeatureoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFeatureoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListFeatureoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
