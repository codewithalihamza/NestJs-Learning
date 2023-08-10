import { BookService } from './book.services';
import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("book")
export class booksController{

    constructor(private bookService:BookService){}

    // add book
    @Post('/add')
    addBook():string{
        return this.bookService.addBook()
    }
    // delete Book
    @Delete('/delete')
    deleteBook():string{
        return("This is the Delete Book Controller")
    }
    // update book
    @Put('/update')
    updateBook():string{
        return("This is the update Book Controller")
    }
    // getting all books
    @Get('/getAll')
    getBooks():string{
        return("This is the Getting All the Books Controller")
    }
    // get book by id
    @Get('/getBookById/:id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This is the get Book by ID ${params.id} Controller`;
      }
      

}