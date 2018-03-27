import { TestBed, inject } from '@angular/core/testing';

import { DashboardCardsServiceService } from './dashboard-cards-service.service';

describe('DashboardCardsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardCardsServiceService]
    });
  });

  it('should be created', inject([DashboardCardsServiceService], (service: DashboardCardsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
