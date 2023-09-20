import { Contributor } from "./Contributor";
import { Author } from "./Author";

export interface Book {
    readonly authors: Author[];
    readonly contributors: Contributor[];
    readonly copyright_date: string;
    readonly edition_name: string;
    readonly isbn_10?: string[];
    readonly isbn_13?: string[];
    readonly languages: string[];
    readonly number_of_pages: number;
    readonly physical_dimensions: string;
    readonly physical_format: string;
    readonly publish_date: string;
    readonly publish_places: string[];
    readonly publishers: string[];
    readonly series: string[];
    readonly title: string
}