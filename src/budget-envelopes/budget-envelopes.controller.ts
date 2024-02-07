import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BudgetEnvelopesService } from './budget-envelopes.service';
import { CreateBudgetEnvelopeDto } from './dto/create-budget-envelope.dto';
import { UpdateBudgetEnvelopeDto } from './dto/update-budget-envelope.dto';

@Controller('/budget-envelopes')
export class BudgetEnvelopesController {
  constructor(
    private readonly budgetEnvelopesService: BudgetEnvelopesService,
  ) {}

  @Post()
  create(@Body() createBudgetEnvelopeDto: CreateBudgetEnvelopeDto) {
    return this.budgetEnvelopesService.create(createBudgetEnvelopeDto);
  }

  @Get()
  findAll() {
    return this.budgetEnvelopesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetEnvelopesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBudgetEnvelopeDto: UpdateBudgetEnvelopeDto,
  ) {
    return this.budgetEnvelopesService.update(id, updateBudgetEnvelopeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetEnvelopesService.remove(id);
  }
}
