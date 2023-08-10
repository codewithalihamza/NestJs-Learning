import { BookService } from './book.services';
export declare class booksController {
    private bookService;
    constructor(bookService: BookService);
    addBook(): string;
    deleteBook(): string;
    updateBook(): string;
    getBooks(): string;
    findOne(params: any): string;
}
