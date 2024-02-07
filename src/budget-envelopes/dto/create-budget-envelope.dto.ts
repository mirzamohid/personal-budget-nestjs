import { BudgetEnvelope } from '../budget-envelopes.interface';

export class CreateBudgetEnvelopeDto implements BudgetEnvelope {
  title: string;
  budget: number;
}
