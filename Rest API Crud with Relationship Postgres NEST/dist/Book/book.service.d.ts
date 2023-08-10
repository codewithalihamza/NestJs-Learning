import { Book } from './Data/book.dto';
export declare class BookService {
    books: Book[];
    addBookService(reqBook: Book): string;
    updateBookService(reqBook: Book): string;
    deleteBookService(bookId: string): string;
    findAllBooks(): Book[];
}
