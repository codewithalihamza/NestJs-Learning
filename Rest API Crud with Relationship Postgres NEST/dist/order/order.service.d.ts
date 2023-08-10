import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order | undefined>;
    update(id: number, UpdateOrderDto: CreateOrderDto): Promise<Order | undefined>;
    remove(id: number): Promise<void>;
}
