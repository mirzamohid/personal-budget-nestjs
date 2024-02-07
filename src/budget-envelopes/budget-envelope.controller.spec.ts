import { Test, TestingModule } from '@nestjs/testing';
import { BudgetEnvelopesController } from './budget-envelopes.controller';
import { BudgetEnvelopesService } from './budget-envelopes.service';

describe('BudgetEnvelopesController', () => {
  let controller: BudgetEnvelopesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetEnvelopesController],
      providers: [BudgetEnvelopesService],
    }).compile();

    controller = module.get<BudgetEnvelopesController>(BudgetEnvelopesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
