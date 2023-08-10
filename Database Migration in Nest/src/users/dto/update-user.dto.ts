import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name:string
    email:string
    Order:CreateOrderDto[]
}
