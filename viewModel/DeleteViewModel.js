import * as api from "../.Shared/BookApiService";

export async function deleteAllForm() {
  try {
    const message = await api.deleteAll();

    if (message.message != "Wszystko usunięto pomyślnie") {
      return false;
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function deleteGenreForm(genre) {
  try {
    const message = await api.deleteGenre(genre);

    if (
      message.message !=
      `Pomyślnie usunięto wszytskie książki z gatunku ${genre}`
    ) {
      return false;
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function deleteIdForm(id) {
  try {
    const message = await api.deleteId(id);

    if (message.message != "Usunięto pomyślnie") {
      return false;
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
