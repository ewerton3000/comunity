import { Inject, Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entities/registration.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationService {
  constructor(
    @Inject('REGISTRATION_REPOSITORY')
    private registrationRepository: Repository<Registration>,
  ) { }
  create(createRegistrationDto: CreateRegistrationDto){
    return this.registrationRepository.save(createRegistrationDto)
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
