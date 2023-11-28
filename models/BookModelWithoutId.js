export default class BookModelWithoutId {
  constructor({ title, author, genre, releaseDate }) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }

  toObject() {
    return {
      title: this.title,
      author: this.author,
      genre: this.genre,
    };
  }
}
