import { User } from 'src/users/entities/user.entity';
export declare class Order {
    id: number;
    productName: string;
    amount: string;
    user: User;
}
