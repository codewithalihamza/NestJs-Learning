import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    name: string;
    email: string;
    Order: CreateOrderDto[];
}
export {};
