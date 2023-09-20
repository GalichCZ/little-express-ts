import {Router} from "express";
import { postBook } from "../controller/book.controller";

export const bookRouter = Router();

bookRouter.post("/book", postBook)