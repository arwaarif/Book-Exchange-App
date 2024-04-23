
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import AddBook from './Components/AddBook';
import ManageAccount from './Components/ManageAccount';


function App() {

  // Define state for storing books
  const [books, setBooks] = useState([]);

  // Define the addBookToList function to add a new book to the list
  const addBookToList = (newBook) => {
    setBooks([...books, newBook]);
  };




  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/Registration" element={<Registration/>} />
      <Route path="/Dashboard" element={<Dashboard books={books} addBookToList={addBookToList}/>} />
      <Route path="/AddBook" element={<AddBook addBookToList={addBookToList}/>} />
      <Route path="/ManageAccount" element={<ManageAccount/>} />
      {/* Other routes */}
    </Routes>
  </Router>
  );
}

export default App
