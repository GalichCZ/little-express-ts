import { getBook } from "../api/getBook";
import { Book } from "../types";
import { checkMissingData } from "../utils/checkMissingData";
import { createBookDtoInstance } from "../utils/createBookDto";

/**
 * @param isbn
 * return {status: number, book: @BookDto}
 * Makes api request, checks if book exists and checks for missing data, depends on it returns status and book
 */
export const postBookService = async (isbn: string) => {
    try {
        let response = await getBook(isbn);
        if (response.status !== 200) {
            return { status: response.status }
        }
        const bookData: Book = response.data;

        const missingData = checkMissingData(bookData);
        const bookDto = createBookDtoInstance(bookData);
        if (missingData) {
            return { status: 202, book: bookDto}
        } else {
            return { status: 200, book: bookDto }
        }
    } catch (err) {
        throw new Error(`An error occurred in book service: ${err}`);
    }
}