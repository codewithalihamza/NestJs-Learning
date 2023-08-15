import { Register } from './entities/register.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class RegisterService {

  constructor(
    @InjectRepository(Register) private readonly RegisterRepository:Repository<Register>
  ){}

  async create(createRegisterDto: CreateRegisterDto) {
    const {username,email,password}=createRegisterDto

    // Hash the password
  const hashedPassword = await bcrypt.hash(password, 30); // 10 is the number of salt rounds

    const user=await this.RegisterRepository.create({username,email,password:hashedPassword})
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
