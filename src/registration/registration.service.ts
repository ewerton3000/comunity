import { Inject, Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration} from './entities/registration.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from 'src/files/entities/file.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @Inject('REGISTRATION_REPOSITORY')
    private registrationRepository: Repository<Registration>,
    @InjectRepository(File)
    private fileRepository: Repository<File>
  ) { }
  create(createRegistrationDto: CreateRegistrationDto){
    return this.registrationRepository.save(createRegistrationDto)
  }
  
  async saveRegistrationFiles(
  registrationData: any,
  photoFile: Express.Multer.File,
  registrationFile: Express.Multer.File,
): Promise<Registration> {
  const registration = this.registrationRepository.create({
    name: registrationData.name,
    email: registrationData.email,
    professional_registration: registrationData.professional_registration,
    area_of_activity: registrationData.area_of_activity,
    specialization: registrationData.specialization,
    professional_description: registrationData.professional_description,
    language: registrationData.language,
    type_of_service: registrationData.type_of_service,
    service_address: registrationData.service_address,
    phone: registrationData.phone,
    social_link_and_professional_site: registrationData.social_link_and_professional_site,
    services_offered: registrationData.services_offered,
    values: registrationData.values,
    accepted_conventions: registrationData.accepted_conventions,
    availability_of_schedules: registrationData.availability_of_schedules,
    information_authorization: registrationData.information_authorization,
    photo: photoFile ? `/uploads${photoFile.filename}` : null,
    copy_of_professional_registration: registrationFile ? `/uploads${registrationFile.filename}` : null,
  });
   
  return this.registrationRepository.save(registration);
}


  findAll() {
    return this.registrationRepository.find();
  }
 
  findOne(id: number) {
    return this.registrationRepository.findOne({ where: { id } });
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationRepository.update(id, updateRegistrationDto);
  }

  remove(id: number) {
    return this.registrationRepository.delete(id);
  }
}
