import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
