"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let BookService = exports.BookService = class BookService {
    constructor() {
        this.books = [];
    }
    addBookService(reqBook) {
        reqBook.id = (0, uuid_1.v4)();
        this.books.push(reqBook);
        return "Books has been added successfully";
    }
    updateBookService(reqBook) {
        let index = this.books.findIndex((currentBook) => {
            return currentBook.id == reqBook.id;
        });
        this.books[index] = reqBook;
        return "Book is successfully updated";
    }
    deleteBookService(bookId) {
        this.books = this.books.filter((book) => {
            return book.id != bookId;
        });
        return "Book is Deleted";
    }
    findAllBooks() {
        return this.books;
    }
};
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
//# sourceMappingURL=book.service.js.map