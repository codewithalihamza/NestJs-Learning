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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
const book_services_1 = require("./book.services");
const common_1 = require("@nestjs/common");
let booksController = exports.booksController = class booksController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    addBook() {
        return this.bookService.addBook();
    }
    deleteBook() {
        return ("This is the Delete Book Controller");
    }
    updateBook() {
        return ("This is the update Book Controller");
    }
    getBooks() {
        return ("This is the Getting All the Books Controller");
    }
    findOne(params) {
        console.log(params.id);
        return `This is the get Book by ID ${params.id} Controller`;
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], booksController.prototype, "addBook", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], booksController.prototype, "deleteBook", null);
__decorate([
    (0, common_1.Put)('/update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], booksController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], booksController.prototype, "getBooks", null);
__decorate([
    (0, common_1.Get)('/getBookById/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], booksController.prototype, "findOne", null);
exports.booksController = booksController = __decorate([
    (0, common_1.Controller)("book"),
    __metadata("design:paramtypes", [book_services_1.BookService])
], booksController);
//# sourceMappingURL=book.controller.js.map