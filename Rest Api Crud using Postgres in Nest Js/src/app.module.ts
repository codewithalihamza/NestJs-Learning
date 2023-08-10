import { BookModule } from './Book/book.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';



@Module({
  imports: [TypeOrmModule.forRoot(
    {
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "112233",
      "database": "postgres",
      "synchronize": true,
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "autoLoadEntities":true
      
    }
  ),UsersModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
