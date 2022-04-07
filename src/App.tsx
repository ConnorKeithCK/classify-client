import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocumentsPage from './common/Documents';
import Navbar from './common/Navbar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {

  useEffect(() => {
    document.title = 'Classify'
  })

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
