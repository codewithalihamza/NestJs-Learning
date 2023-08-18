import { CreateEmployeeInput } from './dto/create-employee.input';
import { Query } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  findAll() {
   return this.employeeRepository.find({
    relations:["project"]
   })
  }
  async create(CreateEmployeeDto: CreateEmployeeInput): Promise<Employee> {
    const user = this.employeeRepository.create(CreateEmployeeDto);
    return this.employeeRepository.save(user);
  }
}
