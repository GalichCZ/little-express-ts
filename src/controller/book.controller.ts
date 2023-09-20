import {Request, Response} from "express";
import { validateIsbn } from "../utils/validateIsbn";
import {postBookService} from "../service/book.service";

export const postBook = async(req:Request, res:Response) => {
    try {
        const isbn:string = req.body.isbn;

        const isIsbnValid = validateIsbn(isbn);

        if(!isIsbnValid){
            res.status(400).json("Invalid ISBN");
        }

        const response = await postBookService(isbn);
        if(response.status !== 200 && response.status !== 202){
            res.status(response.status).json({message:"Book was not found"})
        }

        res.status(response.status).json(response.book);
    } catch (e){
        res.status(500).json(`Unhandled error: ${e}`)
    }
}