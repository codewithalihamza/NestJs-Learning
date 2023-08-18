import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
export declare class EmployeeResolver {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    createEmployee(createEmployeeDTO: CreateEmployeeInput): Promise<Employee>;
}
