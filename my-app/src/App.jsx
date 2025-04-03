import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/Main';
import Reg from './Login/Reg';
import Log from './Login/Login';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/login" element={<Log />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
