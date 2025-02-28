import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ClassesModule } from './classes/classes.module';
import { ClassessService } from './classess/classess.service';
import { PlansModule } from './plans/plans.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AppointmentsModule, ClassesModule, PlansModule, PaymentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ClassessService],
})
export class AppModule {}
