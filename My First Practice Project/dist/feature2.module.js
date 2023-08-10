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
exports.feature2Module = void 0;
const common_1 = require("@nestjs/common");
let feature2Module = exports.feature2Module = class feature2Module {
    constructor() {
        console.log("Feature 2 Module");
    }
};
exports.feature2Module = feature2Module = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [],
        exports: []
    }),
    __metadata("design:paramtypes", [])
], feature2Module);
//# sourceMappingURL=feature2.module.js.map