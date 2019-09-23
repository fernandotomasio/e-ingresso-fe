import { TestBed } from '@angular/core/testing';

import { CategoriaService } from './categoria.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CategoriaService = TestBed.get(CategoriaService);
    expect(service).toBeTruthy();
  });
});
