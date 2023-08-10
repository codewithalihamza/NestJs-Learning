import { Order } from './../../orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn()
id:number
@Column()
name:string
@Column()
email:string
@OneToMany(()=>Order,(x)=>x.user)
Order:Order[]
}
