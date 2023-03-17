import './App.css';
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Title from './Title';
import Table from './Table';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Title />
        <Table />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
