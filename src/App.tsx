import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
    </div>
  );
}

export default App;
