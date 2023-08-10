import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService{

    addBook(){
        return("This the this book Services add function that is attached with controller")
    }

}