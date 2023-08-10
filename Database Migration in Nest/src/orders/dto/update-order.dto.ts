import { CreateUserDto } from './../../users/dto/create-user.dto';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    productName:string
    amount:string
    user:CreateUserDto
}
