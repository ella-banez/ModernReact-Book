  import { useState } from "react"; 
  import useBooksContext from '../hooks/use-books-context.js';

function BookCreate() {

  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='input-title'>Title</label>
        <input className='input' name='input-title' value={title} onChange={handleChange}/>
        <button className="button is-light">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
