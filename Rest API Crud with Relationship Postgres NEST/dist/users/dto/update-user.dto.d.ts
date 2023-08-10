import { CreateOrderDto } from './../../order/dto/create-order.dto';
import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    username: string;
    email: string;
    password: string;
    order: CreateOrderDto[];
}
export {};
