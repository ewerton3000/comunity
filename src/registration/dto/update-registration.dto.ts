import { PartialType } from '@nestjs/swagger';
import { CreateRegistrationDto } from './create-registration.dto';
import { Column } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';

export class UpdateRegistrationDto extends PartialType(CreateRegistrationDto) {
    @IsString()
           name: string
       
           @IsString()
           email: string
        
           @IsString()
           professional_registration: string
       
           @IsString()
           area_of_activity: string
       
          @IsString()
           specialization: string
       
          @IsString()
           professional_description: string
       
          @IsString()
           language: string
       
          @IsString()
           type_of_service: string
       
          @IsString()
           service_address: string
       
           @IsNumber()
           phone: number
       
          @IsString()
           social_link_and_professional_site: string
       
          @IsString()
           services_offered: string
       
          @IsString()
           values: number
       
          @IsString()
           accepted_conventions: string
       
          @IsString()
           availability_of_schedules: string
       
          @IsString()
           copy_of_professional_registration: string //Veja uma solução para este atributo foto
       
          @IsString()
           information_authorization: string
}
