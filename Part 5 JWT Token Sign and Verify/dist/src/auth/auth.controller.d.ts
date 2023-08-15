import { Register } from './../register/entities/register.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        user: Register;
        token: string;
    }>;
    verifyToken(body: {
        token: string;
    }): Promise<any>;
}
