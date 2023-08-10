import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDto } from './../../users/dto/create-user.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsNotEmpty()
    @IsNumber()
    amount: number;
  
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;
}
