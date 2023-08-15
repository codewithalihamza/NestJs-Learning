import { RegisterService } from './../register/register.service';
import { Register } from './../register/entities/register.entity';
import {  Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private RegisterService: RegisterService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Register | null> {
    const user = await this.RegisterService.findByEmail(email);


    
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
    
  }

  async generateToken(user: Register): Promise<string> {
    const payload = { email: user.email, id: user.id };
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string): Promise<any> {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
