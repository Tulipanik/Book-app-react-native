export default class BookModelWithoutAuthor {
  constructor({ id, title, author, genre, releaseDate }) {
    this.id = id;
    this.title = title;
    this.genre = genre;
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      genre: this.genre,
    };
  }
}
