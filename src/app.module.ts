import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetEnvelopesModule } from './budget-envelopes/budget-envelopes.module';

@Module({
  imports: [BudgetEnvelopesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
