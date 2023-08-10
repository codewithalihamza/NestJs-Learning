import { CreateOrderDto } from './../../orders/dto/create-order.dto';
export class CreateUserDto {
    name:string
    email:string
    Order:CreateOrderDto[]
}
