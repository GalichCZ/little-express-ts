import { Contributor } from "../types";
import { Author } from "../types/Author";

/*
    This DTO in fact is useless, but I just wanted to show you that
    I understand principles of DTO, like I understand, that we do
    not need to send password hash to client from User entity
 */

class BookDto{
    publishers: string[];
    languages: string[];
    contributors: Contributor[];
    series: string[];
    physical_format: string;
    publish_places: string[];
    edition_name: string;
    number_of_pages: number;
    authors?: Author[];
    title?: string;
    isbn_13?:string[];
    isbn_10?:string[];
    physical_dimensions: string;
    publish_date: string;
    copyright_date: string;

    constructor(publishers: string[], languages: string[], contributors: Contributor[], series: string[], physical_format: string, publish_places: string[], edition_name: string, number_of_pages: number,
                physical_dimensions: string, publish_date: string, copyright_date: string,
                authors?: Author[], title?: string, isbn_13?: string[], isbn_10?: string[]) {
        this.publishers = publishers;
        this.languages = languages;
        this.contributors = contributors;
        this.series = series;
        this.physical_format = physical_format;
        this.publish_places = publish_places;
        this.edition_name = edition_name;
        this.number_of_pages = number_of_pages;
        this.authors = authors;
        this.title = title;
        this.isbn_13 = isbn_13;
        this.isbn_10 = isbn_10;
        this.physical_dimensions = physical_dimensions;
        this.publish_date = publish_date;
        this.copyright_date = copyright_date;
    }
}

export default BookDto
