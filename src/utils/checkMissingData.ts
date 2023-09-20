import { Book } from "../types";

/**
 * @param bookData
 * @return boolean
 * Just checking if something missing in JSON or not
 */
export const checkMissingData = (bookData: Book) => {
    return !bookData.title || !bookData.authors;
}