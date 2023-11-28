export default class BookModel {
  constructor({ id, title, author, genre, releaseDate }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
  }

  setId(id) {
    this.id = id;
  }

  setTitle(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
  }

  setGenre(genre) {
    this.genre = genre;
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      genre: this.genre,
    };
  }
}
