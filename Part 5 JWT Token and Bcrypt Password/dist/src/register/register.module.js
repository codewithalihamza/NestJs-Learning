"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
const register_controller_1 = require("./register.controller");
const register_entity_1 = require("./entities/register.entity");
let RegisterModule = exports.RegisterModule = class RegisterModule {
};
exports.RegisterModule = RegisterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([register_entity_1.Register])],
        controllers: [register_controller_1.RegisterController],
        providers: [register_service_1.RegisterService],
        exports: [register_service_1.RegisterService]
    })
], RegisterModule);
//# sourceMappingURL=register.module.js.map