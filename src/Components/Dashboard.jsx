// Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import SearchBar from './SearchBar';
import { books as allBooks } from './data'; // Importing books as allBooks to avoid naming conflict
import './styles.css'; // Import the stylesheet

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]);
  

  const handleSearch = (searchTerm) => {
    // Placeholder logic: Filter books based on search term
    const results = allBooks.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };

  // Function to update the book list with a new book
  const addBookToList = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Merge search results and added books
  const mergedBooks = [...searchResults, ...books];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>DASHBOARD</h2>
        <SearchBar onSearch={handleSearch} />
        <ul>
          <li><Link to="/ManageAccount">Manage Account</Link></li>
          <li><Link to="/AddBook">Add Book</Link></li>
          <li><Link to="/ExchangeBook">Exchange Book</Link></li>
        </ul>
      </div>
      <div className="content">
        <BookList books={mergedBooks} />
      </div>
    </div>
  );
};

export default Dashboard;
