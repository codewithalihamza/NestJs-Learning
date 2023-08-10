import { CreateOrderDto } from './../../order/dto/create-order.dto';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    username:string;
    email:string;
    password:string;
    order: CreateOrderDto[]; // Array of orders
}
