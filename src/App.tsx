import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocumentsPage from './common/Documents';
import Navbar from './common/Navbar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<DocumentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
