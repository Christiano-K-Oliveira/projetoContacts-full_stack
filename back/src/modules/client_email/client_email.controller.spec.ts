import { Test, TestingModule } from '@nestjs/testing';
import { ClientEmailController } from './client_email.controller';
import { ClientEmailService } from './client_email.service';

describe('ClientEmailController', () => {
  let controller: ClientEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientEmailController],
      providers: [ClientEmailService],
    }).compile();

    controller = module.get<ClientEmailController>(ClientEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
