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
exports.rootModule = void 0;
const book_controller_1 = require("./book.controller");
const chat_module_1 = require("./chat.module");
const order_module_1 = require("./order.module");
const user_module_1 = require("./user.module");
const common_1 = require("@nestjs/common");
const book_services_1 = require("./book.services");
let rootModule = exports.rootModule = class rootModule {
    constructor() {
        console.log("Root Module");
    }
};
exports.rootModule = rootModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.userModule, order_module_1.orderModule, chat_module_1.chatModule],
        controllers: [book_controller_1.booksController],
        providers: [book_services_1.BookService],
        exports: []
    }),
    __metadata("design:paramtypes", [])
], rootModule);
//# sourceMappingURL=root.module.js.map