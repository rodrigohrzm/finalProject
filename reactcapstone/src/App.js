import './App.css';
import React from 'react';
import { useReducer, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Footer from './Footer';

{
// 2. pasarle el date a fetchAPI para que devuelva las horas y guardar esas horas en el array
//    2.1. initializeTimes { object date.hours = fetchapi(today) }
//    2.2. updateTimes { object date.hours = fetchapi(selected) }

// Update the initializeTimes function that you previously created to use
// the fetchData API function to return the available times for today’s date.
//// Tip: You can create a Date object to represent today’s date.
// Update the updateTimes function that you previously created to use the
// fetchData API function. Remember, you dispatched the selected date to
// the updateTimes function. This should be passed to the fetchData function as a parameter.

// PARA QUE FUNCIONE EL REDUCER HAY QUE HACER dispatch(newDate) https://www.youtube.com/watch?v=kK_Wqx3RnHk



}

function App() {

  const [ freehours , dispatch ] = useReducer(updateTimes, ["Select a date first"]);
  const [extData, setExtData] = useState({});

  function updateTimes(freehours, selectedDate) {
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`)
            .then(response => response.json())
            .then(jsonData => setExtData(jsonData.result))
            console.log(jsonData.result);
          }, []);

    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  }

  function checkInput(date) {
    const selectedDate = date;
    dispatch(selectedDate);
    console.log(selectedDate);
 }

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage availabletimes={freehours} settimes={checkInput} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
