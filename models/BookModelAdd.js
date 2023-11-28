export default class BookModelAdd {
  constructor({ title, author, genre, releaseDate }) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    // this.releaseDate = releaseDate;
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

  setGenre(genre) {
    this.genre = genre;
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      genre: this.genre,
      // releaseDate: this.releaseDate,
    };
  }
}
