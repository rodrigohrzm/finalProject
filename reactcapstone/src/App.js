import './App.css';
import React from 'react';
import Routes from 'react';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Footer from './Footer';

function App() {
  return (
    <> // header?
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        {/* <HomePage /> */} // renombrar los archivos primero
          {/* <CallToAction /> */}
          {/* <Specials /> */}
          {/* <CustomersSay /> */}
          {/* <Chicago  /> */}
        {/* <BookingPage /> */}
          {/* <Title /> */}
          {/* <Table /> */}
          {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
