import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class CreateOrderDto {
    productName: string;
    amount: string;
    user: CreateUserDto;
}
