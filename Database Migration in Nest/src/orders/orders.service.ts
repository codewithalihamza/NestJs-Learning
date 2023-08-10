import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository:Repository<Order>
  ){}
  create(createOrderDto: CreateOrderDto) {
    const userOrder=this.orderRepository.create(createOrderDto)
    return this.orderRepository.save(userOrder)
  }

  findAll() {
    return this.orderRepository.find({
      relations:['user']
    });
  }

  findOne(id: number) {
    return this.orderRepository.findOne({
      where:{id},
      relations:['user']
    })
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    await this.orderRepository.update(id,updateOrderDto)
    return this.findOne(id)
  }

  remove(id: number) {
    this.orderRepository.delete(id)
    return "Order Deleted Thanks Continue Shopping"

  }
}
