import * as api from "../.Shared/BookApiService";
import BookModel from "../models/BookModel";

export async function handleAuthorSearch(genre) {
  try {
    let books = await api.getAllGenre(genre);
    books = books.map((singleBook) => {
      singleBook = new BookModel(singleBook);
      return Object.values(singleBook.toObject());
    });
    return books;
  } catch (err) {
    console.log(err);
  }
}

export async function handleAuthorSearch(title) {
  try {
    let books = await api.getAllAuthor(title);
    books = books.map((singleBook) => {
      singleBook = new BookModel(singleBook);
      return Object.values(singleBook.toObject());
    });
    return books;
  } catch (err) {
    console.log(err);
  }
}

export async function handleIdSearch(id) {
  try {
    let book = await api.getById(id);
    book = book.map((singleBook) => {
      singleBook = new BookModel(singleBook);
      return Object.values(singleBook.toObject());
    });
    return book;
  } catch (err) {
    console.log(err);
  }
}
