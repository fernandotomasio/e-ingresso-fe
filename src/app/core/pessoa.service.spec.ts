import { TestBed } from '@angular/core/testing';

import { PessoaService } from './pessoa.service';
import { HttpClientModule } from '@angular/common/http';

describe('PessoaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: PessoaService = TestBed.get(PessoaService);
    expect(service).toBeTruthy();
  });
});
