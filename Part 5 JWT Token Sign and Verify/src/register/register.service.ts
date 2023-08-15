import { Register } from './entities/register.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {

  constructor(
    @InjectRepository(Register) private readonly RegisterRepository:Repository<Register>
  ){}

  async create(createRegisterDto: CreateRegisterDto) {
    const user=await this.RegisterRepository.create(createRegisterDto)
    return this.RegisterRepository.save(user)

  }

  findAll() {
    return this.RegisterRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
  async findByEmail(email: string): Promise<Register | undefined> {
    return await this.RegisterRepository.findOne({ where: { email } });
  }
}
