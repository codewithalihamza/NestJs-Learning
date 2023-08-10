import { booksController } from './book.controller';
import { chatModule } from './chat.module';
import { orderModule } from './order.module';
import { userModule } from './user.module';
import { Module } from '@nestjs/common';
import { BookService } from './book.services';


@Module({
  imports: [userModule,orderModule,chatModule],
  controllers: [booksController],
  providers: [BookService],
  exports:[]
})
export class rootModule {
  constructor(){
    console.log("Root Module")
  }
}
