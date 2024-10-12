import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrdenComponent } from './app-orden.component';

describe('AppOrdenComponent', () => {
  let component: AppOrdenComponent;
  let fixture: ComponentFixture<AppOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppOrdenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
