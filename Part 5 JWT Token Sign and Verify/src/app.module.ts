import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions)
    ,RegisterModule, AuthModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
