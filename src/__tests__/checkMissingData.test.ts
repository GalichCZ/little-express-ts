import {checkMissingData} from "../utils/checkMissingData";
import { Book } from "../types";


describe("Check missing data test", () => {
    test("Nothing is missing", () => {
        const validBook = {
            title:"title",
            authors:[
                {
                    key:"qwe"
                }
            ]
        } as Book
        expect(checkMissingData(validBook)).toBeFalsy();
    })

    test("Author is missing", () => {
        const nonValidBook = {
            title:"title",
        } as Book
        expect(checkMissingData(nonValidBook)).toBeTruthy();
    })

    test("Title is missing", () => {
        const validBook = {
            authors:[
                {
                    key:"qwe"
                }
            ]
        } as Book
        expect(checkMissingData(validBook)).toBeTruthy();
    })
})