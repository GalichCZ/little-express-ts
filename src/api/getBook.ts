import { AxiosResponse } from "axios";
import axios from "../provider/axiosConfig";
import { Book } from "../types";

/**
 * @param isbn
 * @return Book
 * simple API request
 */
export const getBook = async (isbn:string):Promise<AxiosResponse<Book>> => {
    try {
        return await axios.get<Book>(`/${isbn}.json`);
    }
    catch (e){
        throw new Error(`An error occurred in get request: ${(e as Error).message}`);
    }
}