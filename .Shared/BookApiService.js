const URL = "http://localhost:8080/";

export function getMax() {
  return maxId;
}
async function getAPIRequest(endpoint, metadata = {}) {
  return fetch(endpoint, metadata).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return new Error(res.status);
    }
  });
}

export async function getAllBooks(page, perPage) {
  const endpoint = `${URL}getAllBooks?perpage=${perPage}&page=${page}`;

  try {
    const response = await getAPIRequest(endpoint);
    return response;
  } catch (err) {
    return;
  }
}

export async function getAllGenre(genre) {
  const endpoint = `${URL}getBookByGenre/${genre}`;

  try {
    const response = await getAPIRequest(endpoint);
    return response;
  } catch (err) {
    return;
  }
}

export async function getAllAuthor(author) {
  const endpoint = `${URL}getBookByAuthor/${author}`;

  try {
    const response = await getAPIRequest(endpoint);
    return response;
  } catch (err) {
    return;
  }
}

export async function getById(id) {
  const endpoint = `${URL}getBookById/${id}`;

  try {
    const response = await getAPIRequest(endpoint);
    return response;
  } catch (err) {
    return;
  }
}

export async function getMaxId() {
  const endpoint = `${URL}getMaxId`;

  try {
    const response = await getAPIRequest(endpoint);
    return response;
  } catch (err) {
    return;
  }
}

export async function add(book) {
  const endpoint = `${URL}addBook`;

  try {
    const response = await getAPIRequest(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    return response;
  } catch (error) {
    return;
  }
}

export async function update(book) {
  const endpoint = `${URL}updateBook/${book.id}`;

  try {
    const response = await getAPIRequest(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    return response;
  } catch (error) {
    return;
  }
}

export async function deleteAll() {
  const endpointDailyForecast = `${URL}deleteAllBooks`;

  try {
    const response = await getAPIRequest(endpointDailyForecast, {
      method: "DELETE",
    });
    return response;
  } catch (err) {
    return;
  }
}

export async function deleteId(id) {
  if (id == "") {
    id = 0;
  }
  const endpoint = `${URL}deleteBookById/${id}`;

  try {
    const response = await getAPIRequest(endpoint, {
      method: "DELETE",
    });
    return response;
  } catch (err) {
    return;
  }
}

export async function deleteGenre(genre) {
  const endpointDailyForecast = `${URL}/deleteAllBooksByGenre/${genre}`;

  try {
    const response = await getAPIRequest(endpointDailyForecast, {
      method: "DELETE",
    });
    return response;
  } catch (err) {
    return;
  }
}
