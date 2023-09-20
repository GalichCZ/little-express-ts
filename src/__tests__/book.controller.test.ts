import { Request, Response } from 'express';
import { postBook } from "../controller/book.controller";

// Mock the Request and Response objects
const mockRequest = () => {
    const req = {
        body: {},
    } as Request;
    return req;
};

const mockResponse = () => {
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    } as unknown as Response;
    return res;
};

describe('postBook', () => {
    it('should respond with "Invalid ISBN" for an invalid ISBN', async () => {
        const req = mockRequest();
        req.body.isbn = 'invalidISBN';

        const res = mockResponse();

        await postBook(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith('Invalid ISBN');
    });

    it('should respond with "Book was not found" for a non-existent book', async () => {
        const req = mockRequest();
        req.body.isbn = 'validISBN'; // Replace with a valid ISBN

        // Mock postBookService to return a response with status 404
        jest.mock('../service/book.service', () => {
            return {
                postBookService: jest.fn().mockResolvedValue({ status: 404, book: {} }),
            };
        });

        const res = mockResponse();

        await postBook(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Book was not found' });
    });

    it('should respond with the book data for a valid ISBN and status 200', async () => {
        const req = mockRequest();
        req.body.isbn = '0446310786'; // Replace with a valid ISBN

        // Mock postBookService to return a response with status 200
        jest.mock('../service/book.service', () => {
            return {
                postBookService: jest.fn().mockResolvedValue({ status: 200, book: {} }),
            };
        });

        const res = mockResponse();

        await postBook(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(
            {
                "publishers": [
                    "Warner Books"
                ],
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "contributors": [
                    {
                        "role": "Contributor",
                        "name": "Harper Lee test"
                    }
                ],
                "physical_format": "Mass Market Paperback",
                "publish_places": [
                    "New York, USA"
                ],
                "edition_name": "First Warner Books Printing (71)",
                "number_of_pages": 281,
                "authors": [
                    {
                        "key": "/authors/OL498120A"
                    }
                ],
                "title": "To Kill a Mockingbird",
                "isbn_13": [
                    "9780446310789"
                ],
                "isbn_10": [
                    "0446310786"
                ],
                "publish_date": "1982",
                "copyright_date": "1960"
            }
        );
    });

    it('should respond with the book data for a valid ISBN and status 202', async () => {
        const req = mockRequest();
        req.body.isbn = '0-545-01022-5';

        // Mock postBookService to return a response with status 200
        jest.mock('../service/book.service', () => {
            return {
                postBookService: jest.fn().mockResolvedValue({ status: 200, book: {} }),
            };
        });

        const res = mockResponse();

        await postBook(req, res);

        expect(res.status).toHaveBeenCalledWith(202);
        expect(res.json).toHaveBeenCalledWith(
            {
                "publishers": [
                    "Bloomsbury"
                ],
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "series": [
                    "Harry Potter #7"
                ],
                "physical_format": "Hardcover",
                "publish_places": [
                    "New York, USA"
                ],
                "number_of_pages": 759,
                "title": "Harry Potter and the Deathly Hallows",
                "isbn_13": [
                    "9780545010221"
                ],
                "isbn_10": [
                    "0545010225"
                ],
                "publish_date": "2007-07",
                "copyright_date": "2007"
            }
        );
    });

});
