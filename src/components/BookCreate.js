import { useState } from "react";

function BookCreate({onCreate}) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
