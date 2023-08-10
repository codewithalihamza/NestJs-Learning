import { Injectable } from '@nestjs/common';
import { Book } from './Data/book.dto';
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class BookService{
    public books:Book[]=[]

    // Add Book
    addBookService(reqBook:Book): string{
        // auto id generate
        reqBook.id=uuidv4()
        this.books.push(reqBook)
        return"Books has been added successfully"
    }

    // update Book
    updateBookService(reqBook:Book):string{
        let index =this.books.findIndex((currentBook)=>{
            return currentBook.id==reqBook.id
        })
        this.books[index]=reqBook
        return"Book is successfully updated"
    }

    // delete book
    deleteBookService(bookId:string):string{
        this.books=this.books.filter((book)=>{
            return book.id!=bookId
        })
        return "Book is Deleted"
    }

    // Find All Books
    findAllBooks():Book[]{
        return this.books
    }
}