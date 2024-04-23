// AddBook.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the stylesheet

const AddBook = ({ addBookToList }) => {
  // State for form fields
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [condition, setCondition] = useState('');
  const [availability, setAvailability] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new book to the list
    const newBook = { id: Math.random(), title, author, genre, condition, availability }; // Assign a unique id
    addBookToList(newBook);
    // Reset form fields
    setTitle('');
    setAuthor('');
    setGenre('');
    setCondition('');
    setAvailability('');
  };

  return (
    <div className="add-book-container"> {/* Apply container class */}
      <div className="add-book-form"> {/* Apply form class */}
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            <label>Genre:</label>
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
          </div>
          <div>
            <label>Condition:</label>
            <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
          </div>
          <div>
            <label>Availability:</label>
            <input type="text" value={availability} onChange={(e) => setAvailability(e.target.value)} />
          </div>
          <button type="submit">Add Book</button>
        </form>
        <Link to="/Dashboard">Go back to Dashboard</Link>
      </div>
    </div>
  );
};

export default AddBook;
