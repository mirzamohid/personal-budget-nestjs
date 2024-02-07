import { Injectable } from '@nestjs/common';
import { CreateBudgetEnvelopeDto } from './dto/create-budget-envelope.dto';
import { UpdateBudgetEnvelopeDto } from './dto/update-budget-envelope.dto';
import { BudgetEnvelopeEntity } from './entities/budget-envelope.entity';

@Injectable()
export class BudgetEnvelopesService {
  private budgetEnvelopes: BudgetEnvelopeEntity[] = [];

  create(createBudgetEnvelopeDto: CreateBudgetEnvelopeDto) {
    const envelope = new BudgetEnvelopeEntity(createBudgetEnvelopeDto);

    this.budgetEnvelopes.push(envelope);

    return envelope;
  }

  findAll() {
    return this.budgetEnvelopes;
  }

  findOne(id: string) {
    const res = this.budgetEnvelopes.find((envelope) => envelope._id === id);
    console.log(res);
    return res;
  }

  update(id: string, updateBudgetEnvelopeDto: UpdateBudgetEnvelopeDto) {
    const envelopeIndex = this.budgetEnvelopes.findIndex(
      (envelope) => envelope._id === id,
    );

    Object.assign(this.budgetEnvelopes[envelopeIndex], updateBudgetEnvelopeDto);

    return this.budgetEnvelopes[envelopeIndex];
  }

  remove(id: string) {
    const envelopeIndex = this.budgetEnvelopes.findIndex(
      (envelope) => envelope._id === id,
    );

    this.budgetEnvelopes.splice(envelopeIndex, 1);

    return this.budgetEnvelopes;
  }
}
