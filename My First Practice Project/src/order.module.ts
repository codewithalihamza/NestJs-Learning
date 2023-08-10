import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class orderModule {
  constructor(){
    console.log("Order Module")
  }
}
