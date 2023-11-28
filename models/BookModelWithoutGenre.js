export default class BookModelWIthoutGenre {
  constructor({ id, title, author, genre, releaseDate }) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
    };
  }
}
