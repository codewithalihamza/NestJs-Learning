import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    "type": 'postgres',
    "host": 'localhost',
    "port": 5432,
    "username": 'postgres',
    "password": '112233',
    "database": 'Test',
   "synchronize": true,
    "entities": ["dist/**/*.entity{.ts,.js}"]}
   
  ), EmployeeModule,GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphQlschema.gql'),
  }), ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
