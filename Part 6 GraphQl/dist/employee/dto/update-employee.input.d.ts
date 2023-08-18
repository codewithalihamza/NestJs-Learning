import { CreateEmployeeInput } from './create-employee.input';
declare const UpdateEmployeeInput_base: import("@nestjs/common").Type<Partial<CreateEmployeeInput>>;
export declare class UpdateEmployeeInput extends UpdateEmployeeInput_base {
    username: string;
    password: string;
    projectId: string;
}
export {};
