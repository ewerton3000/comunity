import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { registrationProviders } from './registration.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './entities/registration.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Registration])],
  controllers: [RegistrationController],
  providers: [...registrationProviders, RegistrationService],
})
export class RegistrationModule { }
