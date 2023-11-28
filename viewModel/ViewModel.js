import * as api from "../.Shared/BookApiService.js";
import BookModel from "../models/BookModel.js";

export async function maxId() {
  return await api.getMaxId();
}

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
    console.log("Hejja");
    const maxId = await api.getMaxId();

    book.setId(maxId.max + 1);
    const message = await api.add(book);

    if (message.message != "Udało się dodać do bazy") {
      return false;
    }

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function updateForm(book) {
  try {
    const message = await api.update(book);

    if (message.message != "Zaktualizowano pomyślnie") {
      return false;
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
