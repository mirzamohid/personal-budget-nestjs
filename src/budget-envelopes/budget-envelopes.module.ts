import { Module } from '@nestjs/common';
import { BudgetEnvelopesService } from './budget-envelopes.service';
import { BudgetEnvelopesController } from './budget-envelopes.controller';

@Module({
  controllers: [BudgetEnvelopesController],
  providers: [BudgetEnvelopesService],
})
export class BudgetEnvelopesModule {}
