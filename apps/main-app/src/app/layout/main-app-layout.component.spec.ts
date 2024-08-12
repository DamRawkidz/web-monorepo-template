import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainAppLayoutComponent } from './main-app-layout.component';

describe('MainAppLayoutComponent', () => {
  let component: MainAppLayoutComponent;
  let fixture: ComponentFixture<MainAppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAppLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
