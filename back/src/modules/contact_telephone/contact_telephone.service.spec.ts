import { Test, TestingModule } from '@nestjs/testing';
import { ContactTelephoneService } from './contact_telephone.service';

describe('ContactTelephoneService', () => {
  let service: ContactTelephoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactTelephoneService],
    }).compile();

    service = module.get<ContactTelephoneService>(ContactTelephoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
