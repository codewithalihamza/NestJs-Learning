import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
constructor(
  @InjectRepository(User)
  private readonly userRepository:Repository<User>
){}


  create(createUserDto: CreateUserDto) {
// const {email}=createUserDto
    
//     const existingUser=this.userRepository.findOne({where:{email}})
//     if (existingUser) {
//       const  user =this.userRepository.create(createUserDto)
//       return this.userRepository.save(user)
//     }
      const  user =this.userRepository.create(createUserDto)
      return this.userRepository.save(user)
  }

  findAll() {
    return this.userRepository.find({
      relations:['Order']});
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where:{id},
      relations:['Order']
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id,updateUserDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.userRepository.delete(id)
    return "User Deleted Thanks Bro";
  }
}
