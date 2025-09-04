import { useState } from "react";
import useBooksContext from '../hooks/use-books-context.js';

function BookEdit({ book, onSubmit }) {

  const [title, setTitle] = useState(book.title);
  const { editBookId } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  onSubmit();
  editBookId(book.id, title);

  };

  return <form onSubmit={handleSubmit} className="book-edit">
    <label>Title</label>
    <input className="input" value={title} onChange={handleChange}/>
    <button className="button is-primary"> 
      Save
    </button>
  </form>;
}

export default BookEdit;
