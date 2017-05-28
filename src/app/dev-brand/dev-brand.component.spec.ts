import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DevBrandComponent } from './dev-brand.component';

describe('DevBrandComponent', () => {
  let component: DevBrandComponent;
  let fixture: ComponentFixture<DevBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
