import * as api from "../.Shared/BookApiService";
import BookModel from "../models/BookModel";
import BookModelWithoutAuthor from "../models/BookModelWithoutAuthor";
import BookModelWIthoutGenre from "../models/BookModelWithoutGenre";
import BookModelWithoutId from "../models/BookModelWithoutId";

export async function handleGenreSearch(genre) {
  try {
    let books = await api.getAllGenre(genre);
    books = books.map((singleBook) => {
      singleBook = new BookModelWIthoutGenre(singleBook);
      return Object.values(singleBook.toObject());
    });
    books.push(["id", "title", "author"]);
    return books;
  } catch (err) {
    console.log(err);
  }
}

export async function handleAuthorSearch(author) {
  try {
    let books = await api.getAllAuthor(author);
    books = books.map((singleBook) => {
      singleBook = new BookModelWithoutAuthor(singleBook);
      return Object.values(singleBook.toObject());
    });
    books.push(["id", "title", "genre"]);
    console.log(books[0]);
    return books;
  } catch (err) {
    console.log(err);
  }
}

export async function handleIdSearch(id) {
  try {
    let book = await api.getById(id);
    book = book.map((singleBook) => {
      singleBook = new BookModelWithoutId(singleBook);
      return Object.values(singleBook.toObject());
    });
    book.push(["title", "author", "genre"]);
    return book;
  } catch (err) {
    console.log(err);
  }
}
