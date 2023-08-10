import { CreateOrderDto } from './../../order/dto/create-order.dto';

export class CreateUserDto {
    username: string;
    email: string;
    password: string;
    order: CreateOrderDto[]; // Array of orders
}
