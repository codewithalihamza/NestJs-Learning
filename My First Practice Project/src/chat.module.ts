import { feature2Module } from './feature2.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [feature2Module],
  controllers: [],
  providers: [],
  exports:[]
})
export class chatModule {
  constructor(){
    console.log("Chat Module")
  }
}
