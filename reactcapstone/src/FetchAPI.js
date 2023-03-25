import './App.css';
import React from 'react';
import { useReducer, useEffect, useState } from 'react';
import { isRouteErrorResponse, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Footer from './Footer';

const seededRandom = function(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(userInput) {
    let result = [];
    const [year, month, day] = userInput.split('-')
    const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
    const fulltime = new Date(year, month, day, hour, minute, second);
    let random = seededRandom(fulltime);

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

export {fetchAPI}