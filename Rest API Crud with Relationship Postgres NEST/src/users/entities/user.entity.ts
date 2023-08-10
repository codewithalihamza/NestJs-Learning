import { Order } from './../../order/entities/order.entity';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;
  @Column()
  password:string;
  @OneToMany(() => Order, (orders) => orders.user)
  order:Order[]

}
