import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetEnvelopeDto } from './create-budget-envelope.dto';

export class UpdateBudgetEnvelopeDto extends PartialType(
  CreateBudgetEnvelopeDto,
) {}
