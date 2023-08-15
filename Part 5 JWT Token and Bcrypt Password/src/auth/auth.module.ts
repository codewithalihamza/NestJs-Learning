import { AuthController } from './auth.controller';
import { RegisterModule } from './../register/register.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';




// @Module({
//   imports: [
//     RegisterModule
//   ],
//   providers: [AuthService],
//   controllers: [AuthController],
// })
// export class AuthModule {}

@Module({
  imports: [
    JwtModule.register({
      secret: '093AKD2DsF2J1',
      signOptions: { expiresIn: '1h' }, // You can adjust the expiration time
    }),
    
    RegisterModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
