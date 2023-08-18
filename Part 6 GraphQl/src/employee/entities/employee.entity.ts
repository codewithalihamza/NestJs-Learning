import { Project } from './../../project/entities/project.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id:string
  @Field()
  @Column()
  username:string
  @Field()
  @Column()
  password:string

  @ManyToOne(()=>Project,project=>project.employees)
  // @JoinColumn({ name: 'projectId' }) 
  @Field(()=>Project)
  project:Project

  @Field()
  @Column()
  projectId:string
}
