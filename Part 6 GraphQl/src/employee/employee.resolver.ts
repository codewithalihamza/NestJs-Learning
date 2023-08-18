import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}
  @Query(()=>[Employee])
  findAll() {
    return this.employeeService.findAll()
  }
  @Mutation(() => Employee)
  createEmployee(@Args('createEmployeeInput') createEmployeeDTO: CreateEmployeeInput) {
    return this.employeeService.create(createEmployeeDTO);
  }

}
