import { Test, TestingModule } from '@nestjs/testing';
import { BudgetEnvelopesService } from './budget-envelopes.service';

describe('BudgetEnvelopesService', () => {
  let service: BudgetEnvelopesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetEnvelopesService],
    }).compile();

    service = module.get<BudgetEnvelopesService>(BudgetEnvelopesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
