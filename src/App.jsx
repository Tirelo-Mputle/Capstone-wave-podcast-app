import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// routes
import { Home, Signup } from './pages';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
