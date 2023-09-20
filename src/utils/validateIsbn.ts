/**
 * @param isbn
 * @return boolean
 * Checks if it is ISBN10 or 13, and calls child function, than these functions returns boolean if ISBN is valid
 */
export const validateIsbn = (isbn:string) => {
    const formattedString = isbn.replace(/-/g, '');
    const isbnLength = formattedString.length;
    if(isbnLength !== 10 && isbnLength !== 13) {
        return false;
    }

    const isIsbnValid = isbnLength === 10 ? validateISBN10(formattedString) : validateISBN13(formattedString);

    return  isIsbnValid;
}

const validateISBN10 = (isbn: string) => {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let digit = parseInt(isbn[i]);

        sum += (digit * (10 - i));
    }

    let last = isbn[9];
    if (isNaN(parseInt(last)) && last != 'X')
        return false;

    sum += ((last == 'X') ? 10 : parseInt(last));

    return (sum % 11 == 0);
}

const validateISBN13 = (isbn: string) => {
    let sum = 0;

    let mulBy1 = true;
    for(let i = 0; i < isbn.length; i++) {
        let digit = parseInt(isbn[i]);
        if(isNaN(digit)){
            return false
        }

        sum += digit * (mulBy1 ? 1 : 3);
        mulBy1 = !mulBy1;
    }

    return sum % 10 === 0;
}