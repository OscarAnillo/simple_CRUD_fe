import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      <h1>Book Stall</h1>
      <div>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Author" />
        {editingId ? <button>Update Book</button> : <button>Add Book</button>}
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
