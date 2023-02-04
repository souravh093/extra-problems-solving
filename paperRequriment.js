function paperRequirements(book1, book2, book3) {
    let firstBook = book1 * 100;
    let secondBook = book2 * 200;
    let thirdBook = book3 * 300;

    return firstBook + secondBook + thirdBook;
}

const getPaper = paperRequirements(2, 8, 1);
console.log(getPaper);