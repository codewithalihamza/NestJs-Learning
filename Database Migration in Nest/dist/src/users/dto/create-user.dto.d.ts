import { CreateOrderDto } from './../../orders/dto/create-order.dto';
export declare class CreateUserDto {
    name: string;
    email: string;
    Order: CreateOrderDto[];
}
