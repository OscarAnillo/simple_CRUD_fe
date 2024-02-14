import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const addAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const addBookHandler = () => {
    if (!title || !author) {
      return alert("Please provide title and author of the book!");
    }
    setBooks([
      ...books,
      {
        id: Date.now(),
        title: title,
        author: author,
      },
    ]);
    setTitle("");
    setAuthor("");
  };

  const deleteBookHandler = (id) => {
    const filteredBooks = books.filter((b) => b.id !== id);
    setBooks(filteredBooks);
  };

  return (
    <div className="App">
      <h1>Book Stall</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={addTitleHandler}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={addAuthorHandler}
        />
        {editingId ? (
          <button>Update Book</button>
        ) : (
          <button onClick={addBookHandler}>Add Book</button>
        )}
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button className="edit">Edit</button>
            <button
              className="delete"
              onClick={() => deleteBookHandler(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
