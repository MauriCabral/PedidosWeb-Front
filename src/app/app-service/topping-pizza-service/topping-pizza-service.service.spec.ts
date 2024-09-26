import { TestBed } from '@angular/core/testing';

import { ToppingPizzaServiceService } from './topping-pizza-service.service';

describe('ToppingPizzaServiceService', () => {
  let service: ToppingPizzaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingPizzaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
