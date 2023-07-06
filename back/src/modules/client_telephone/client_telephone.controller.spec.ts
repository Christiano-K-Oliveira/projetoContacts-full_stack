import { Test, TestingModule } from '@nestjs/testing';
import { ClientTelephoneController } from './client_telephone.controller';
import { ClientTelephoneService } from './client_telephone.service';

describe('ClientTelephoneController', () => {
  let controller: ClientTelephoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientTelephoneController],
      providers: [ClientTelephoneService],
    }).compile();

    controller = module.get<ClientTelephoneController>(ClientTelephoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
