import { TestBed } from '@angular/core/testing';

import { ToppingPizzaService } from './topping-pizza-service.service';

describe('ToppingPizzaServiceService', () => {
  let service: ToppingPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
