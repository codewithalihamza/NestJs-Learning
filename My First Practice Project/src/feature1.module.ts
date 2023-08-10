import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class feature1Module {
  constructor(){
    console.log("Feature 1 Module")
  }
}
