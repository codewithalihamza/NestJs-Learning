import { CreateRegisterDto } from './create-register.dto';
declare const UpdateRegisterDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRegisterDto>>;
export declare class UpdateRegisterDto extends UpdateRegisterDto_base {
    username: string;
    email: string;
    password: string;
}
export {};
