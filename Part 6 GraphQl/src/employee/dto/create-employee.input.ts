import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
 @Field()
 username:string
 @Field()
 password:string
 @Field()
 projectId:string
}
