import { CreateUserDto } from './../../users/dto/create-user.dto';
import { CreateOrderDto } from './create-order.dto';
declare const UpdateOrderDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateOrderDto>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
    productName: string;
    amount: string;
    user: CreateUserDto;
}
export {};
