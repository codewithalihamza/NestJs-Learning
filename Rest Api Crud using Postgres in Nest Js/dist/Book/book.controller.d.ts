import { Book } from './Data/book.dto';
import { BookService } from './book.service';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    addBook(book: Book): string;
    getAllBooks(): Book[];
    updateBook(book: Book): string;
    deleteBook(bookId: string): string;
}
