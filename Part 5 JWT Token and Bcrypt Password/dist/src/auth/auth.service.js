"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const register_service_1 = require("./../register/register.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = exports.AuthService = class AuthService {
    constructor(RegisterService, jwtService) {
        this.RegisterService = RegisterService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.RegisterService.findByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        return null;
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.id };
        return this.jwtService.sign(payload);
    }
    async verifyToken(token) {
        try {
            const decoded = this.jwtService.verify(token);
            return decoded;
        }
        catch (error) {
            throw new Error('Invalid token');
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [register_service_1.RegisterService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map