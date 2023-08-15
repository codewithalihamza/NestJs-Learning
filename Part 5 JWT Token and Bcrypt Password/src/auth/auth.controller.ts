import { Register } from './../register/entities/register.entity';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { stringify } from 'querystring';



// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   async login(@Body() body: { username: string; password: string }) {
//     const { username, password } = body;
//     const user = await this.authService.validateUser(username, password);

//     if (!user) {
//       throw new Error('Invalid credentials');
//     } else {
//         return user;
//     }

//     // const token = await this.authService.generateToken(user);
//     // return { token };
//   }
// }


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const token = await this.authService.generateToken(user);
    return { user,token };
  }


  @Post('verify')
  async verifyToken(@Body() body: { token: string }): Promise<any> {
    const { token } = body;
    const decoded = await this.authService.verifyToken(token);
    return { decoded };
  }
  
}
