import { CreateOrderDto } from './create-order.dto';
import { CreateUserDto } from './../../users/dto/create-user.dto';
declare const UpdateOrderDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateOrderDto>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
    amount: number;
    user: CreateUserDto;
}
export {};
