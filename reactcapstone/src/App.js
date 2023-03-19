import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Footer from './Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
