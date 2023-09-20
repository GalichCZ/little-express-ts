import { validateIsbn } from "../utils/validateIsbn";

describe('ISBN Validation test', ()=> {
    test("non valid ISBN because < 10", ()=>{
        expect(validateIsbn('97')).toBeFalsy();
    })

    test("non valid ISBN because > 10 and < 13", ()=>{
        expect(validateIsbn('979797979797')).toBeFalsy();
    })

    describe("ISBN10 Validation test", () => {
        test("valid ISBN without '-' ", ()=>{
            expect(validateIsbn('0545010225')).toBeTruthy();
        })

        test("valid ISBN with '-' ", ()=>{
            expect(validateIsbn('0-545-01022-5')).toBeTruthy();
        })

        test("last char is not X", () => {
            expect(validateIsbn('007462542S')).toBeFalsy();
        })
    })

    describe("ISBN13 Validation test", () => {
        test("valid ISBN without '-' ", () => {
            expect(validateIsbn("9780716703440")).toBeTruthy();
        })

        test("valid ISBN with '-' ", () => {
            expect(validateIsbn("97-80716-7034-40")).toBeTruthy();
        })

        test("non valid ISBN because of NaN in string ", () => {
            expect(validateIsbn("97-80716-70a4-40")).toBeFalsy();
        })
    })
})