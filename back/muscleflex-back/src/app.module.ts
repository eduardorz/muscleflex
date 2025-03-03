import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ClassesModule } from './classes/classes.module';
import { PlansModule } from './plans/plans.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthModule } from './auth/auth.module';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

@Module({
    imports: [
      ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        try {
          const dbConfig = config.get('typeorm');
          // Agrega esto para confirmar que la configuración está siendo cargada correctamente
          console.log('DB Config:', dbConfig);
          return dbConfig;
        } catch (error) {
          console.error('Error al cargar la configuración de la base de datos:', error);
          throw error;
        }
      },
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    UsersModule, AppointmentsModule, ClassesModule, PlansModule, PaymentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
