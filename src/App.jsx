import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null);

  const updateBookHandler = (id, title, author) => {
    const updatedBookInfo = books.map((book) =>
      book.id === id ? { id, title, author } : book
    );
    setBooks(updatedBookInfo);
    setEditingId("");
  };

  useEffect(() => {
    if (editingId) {
      setTitle(editingId.title);
      setAuthor(editingId.author);
    } else {
      setTitle("");
      setAuthor("");
    }
  }, [editingId]);

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
    if (!editingId) {
      setBooks([
        {
          id: Date.now(),
          title: title,
          author: author,
        },
        ...books,
      ]);
      setTitle("");
      setAuthor("");
    } else {
      updateBookHandler(editingId.id, title, author);
    }
  };

  const editBookHandler = (id) => {
    const findBook = books.find((b) => b.id === id);
    setEditingId(findBook);
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
          <button onClick={addBookHandler} className="btn">
            Update Book
          </button>
        ) : (
          <button onClick={addBookHandler} className="btn">
            Add Book
          </button>
        )}
      </div>
      <ul className="ul">
        {books.map((book) => (
          <li key={book.id} value={book}>
            {book.title} - {book.author}
            <button className="edit" onClick={() => editBookHandler(book.id)}>
              Edit
            </button>
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
