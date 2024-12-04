import { TestBed } from '@angular/core/testing';

import { XmlDetailsService } from './xml-details.service';

describe('XmlDetailsService', () => {
  let service: XmlDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
