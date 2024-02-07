import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
function App() {
  return (
    <Router>
    <Routes>
      <Route exact  path="/" element={ <Dashboard/>} />
      <Route exact  path="/profile" element={<Profile/>} />
    </Routes>
  </Router>
   
  );
}

export default App;
