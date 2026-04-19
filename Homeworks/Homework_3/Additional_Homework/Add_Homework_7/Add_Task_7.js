let books = [
    { name: `ABC`, pages: 35, authors: [`Alan`,`Liza`, `Margo`,`Ra`], genre: [`drama`,`horror`]},
    { name: `Crack`, pages: 450, authors: [`Max`,`Ne`], genre: [`drama`]},
    { name: `Abcd`, pages: 70, authors: [`Alex`, `George`,`He`], genre: [`Horror`, `drama`, `novella`]},
    { name: `AB`, pages: 2, authors: [`Liza`], genre: [`horror`]}
]

let p=0;
let big_book;
let g=0;
let max_genres;
let n=0;
let max_name;
let one_author;
let two_authors;
for (const book of books)
{
    if(book.pages > p)
    {
        p = book.pages;
        big_book = book;
    }
    if(book.genre.length > g)
    {
        g = book.genre.length;
        max_genres = book;
    }
    if(book.name.length > n)
    {
        n = book.name.length;
        max_name = book;
    }
    if(book.authors.length === 2)
    {
        two_authors = book;
    }
    if(book.authors.length === 1)
    {
        one_author = book;
    }
}
console.log(big_book);
console.log(max_genres);
console.log(max_name);
console.log(two_authors);
console.log(one_author);

