import { Test, TestingModule } from '@nestjs/testing';
import { ContactTelephoneController } from './contact_telephone.controller';
import { ContactTelephoneService } from './contact_telephone.service';

describe('ContactTelephoneController', () => {
  let controller: ContactTelephoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactTelephoneController],
      providers: [ContactTelephoneService],
    }).compile();

    controller = module.get<ContactTelephoneController>(ContactTelephoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
