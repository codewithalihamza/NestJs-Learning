import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class feature2Module {
  constructor(){
    console.log("Feature 2 Module")
  }
}
