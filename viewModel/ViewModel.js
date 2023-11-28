import * as api from "../.Shared/BookApiService.js";
import BookModel from "../models/BookModel.js";

export async function getBooksPerPage(page) {
  const perPage = 10;

  const books = await api.getAllBooks(page, perPage);
  const arrayOfArrays = books.map((book) => {
    const singleBook = new BookModel(book);
    return Object.values(singleBook.toObject());
  });
  return arrayOfArrays;
}

export async function addForm(book) {
  try {
    const maxId = await new Promise((resolve, reject) => {
      api.getMaxId((maxId) => resolve(maxId));
    });

    book.setId(maxId + 1);
    console.log(book.id);
    const message = await api.add(book);

    if (message.status !== 201) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error adding form:", error);
    return false;
  }
}
