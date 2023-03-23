import './App.css';
import React, { useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Footer from './Footer';


function updateTimes(availabletimes, newDate) {
  switch (newDate) {
    default:
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  }
}

function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
}

function App() {

  const [ availabletimes , dispatch ] = useReducer(updateTimes(), initializeTimes());

  // PARA QUE FUNCIONE EL REDUCER HAY QUE HACER DISPATCH(NEWDATE) https://www.youtube.com/watch?v=kK_Wqx3RnHk

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage availabletimes={availabletimes} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
