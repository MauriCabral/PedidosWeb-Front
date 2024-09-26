import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetallePizzaComponent } from './app-detalle-pizza.component';

describe('AppDetallePizzaComponent', () => {
  let component: AppDetallePizzaComponent;
  let fixture: ComponentFixture<AppDetallePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDetallePizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDetallePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
