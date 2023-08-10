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
exports.chatModule = void 0;
const feature2_module_1 = require("./feature2.module");
const common_1 = require("@nestjs/common");
let chatModule = exports.chatModule = class chatModule {
    constructor() {
        console.log("Chat Module");
    }
};
exports.chatModule = chatModule = __decorate([
    (0, common_1.Module)({
        imports: [feature2_module_1.feature2Module],
        controllers: [],
        providers: [],
        exports: []
    }),
    __metadata("design:paramtypes", [])
], chatModule);
//# sourceMappingURL=chat.module.js.map