import { BudgetEnvelope } from 'src/budget-envelopes/budget-envelopes.interface';
import { v4 as uuidv4 } from 'uuid';

export class BudgetEnvelopeEntity {
  _id: uuidv4;
  title: string;
  budget: number;

  constructor({ title, budget }: BudgetEnvelope) {
    this._id = uuidv4();
    this.title = title;
    this.budget = budget;
  }
}
