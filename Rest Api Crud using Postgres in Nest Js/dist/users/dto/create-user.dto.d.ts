import { CreateOrderDto } from './../../order/dto/create-order.dto';
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    order: CreateOrderDto[];
}
