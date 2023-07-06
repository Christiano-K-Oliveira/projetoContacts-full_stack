import { Test, TestingModule } from '@nestjs/testing';
import { ClientTelephoneService } from './client_telephone.service';

describe('ClientTelephoneService', () => {
  let service: ClientTelephoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientTelephoneService],
    }).compile();

    service = module.get<ClientTelephoneService>(ClientTelephoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
