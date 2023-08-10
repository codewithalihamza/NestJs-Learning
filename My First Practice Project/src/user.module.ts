import { feature1Module } from './feature1.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [feature1Module],
  controllers: [],
  providers: [],
  exports:[]
})
export class userModule {
  constructor(){
    console.log("User Module")
  }
}
