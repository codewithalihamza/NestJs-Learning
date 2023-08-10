import { dataSourceOptions } from './../db/data-source';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),UsersModule,OrdersModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
