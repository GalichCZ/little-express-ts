import { Router } from "express";
import { bookRouter } from "./book.router";

/*
    Handling all routers
 */
export const routers: Router[] = [bookRouter];