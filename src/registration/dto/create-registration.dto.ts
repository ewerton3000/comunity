import { IsNumber, IsString } from "class-validator"
import { Column } from "typeorm"


export class CreateRegistrationDto {
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

        @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
        timestamp?: Date;
}
 