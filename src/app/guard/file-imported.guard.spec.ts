import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { fileImportedGuard } from './file-imported.guard';

describe('fileImportedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => fileImportedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
