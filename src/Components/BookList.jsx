// BookList.jsx
import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Books List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Condition: {book.condition}</p>
            <p>Availability: {book.availability ? 'Available' : 'Not Available'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
