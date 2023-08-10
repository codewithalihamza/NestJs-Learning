import { CreateUserDto } from 'src/users/dto/create-user.dto';
export class CreateOrderDto {
    productName:string
    amount:string
    user:CreateUserDto
}
