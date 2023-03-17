import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <meta name="book a table page"/>
          <meta name="Booking" />
          <meta name="author" content="Rodrigo" />
          <meta name="language" content="english" />
          <meta name="description" content="A page where you can book a table at the Little Restaurant"/>
          <meta name="og:description" content="A page where you can book a table at the Little Restaurant"/>
          <meta name="og:title" content="Little Lemon: Booking"/>
          <meta name="og:image" content={"./assets/restaurantchefB.jpg"}/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
