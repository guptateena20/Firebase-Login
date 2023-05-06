import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Home from './components/Home';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>}
        />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
