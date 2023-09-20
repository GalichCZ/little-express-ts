import { Book } from "../types";
import BookDto from "../DTO/book.dto";
import bookDto from "../DTO/book.dto";

/**
 *@param bookData
 *@return BookDto
 * NITPICK: JavaScript is not worse than Java, so it is possible to find auto
 */
export const createBookDtoInstance = (bookData:Book) =>{
    const {authors, title, copyright_date, publish_date, publishers, publish_places,
        isbn_10, isbn_13, languages, number_of_pages,
        physical_dimensions, physical_format,
        series, edition_name, contributors}: Book = bookData;
    return new BookDto(publishers, languages, contributors,
        series, physical_format, publish_places, edition_name, number_of_pages,
        physical_dimensions, publish_date, copyright_date, authors, title, isbn_13, isbn_10);
}