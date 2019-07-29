import { TestBed } from '@angular/core/testing';

import { PokemonDetailServiceService } from './pokemon-detail-service.service';

describe('PokemonDetailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonDetailServiceService = TestBed.get(PokemonDetailServiceService);
    expect(service).toBeTruthy();
  });
});
