import { RegisterService } from './../register/register.service';
import { Register } from './../register/entities/register.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private RegisterService;
    private jwtService;
    constructor(RegisterService: RegisterService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<Register | null>;
    generateToken(user: Register): Promise<string>;
    verifyToken(token: string): Promise<any>;
}
