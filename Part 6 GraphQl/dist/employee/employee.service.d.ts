import { CreateEmployeeInput } from './dto/create-employee.input';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
export declare class EmployeeService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    findAll(): Promise<Employee[]>;
    create(CreateEmployeeDto: CreateEmployeeInput): Promise<Employee>;
}
