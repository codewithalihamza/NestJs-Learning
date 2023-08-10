import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    productName:string
    @Column()
    amount:string
    @ManyToOne(()=>User,(x)=>x.Order)
    user:User
}
