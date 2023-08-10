import { Order } from './../../order/entities/order.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    order: Order[];
}
