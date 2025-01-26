// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (
    <RecoilRoot>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
        />
      </Router>
    </RecoilRoot>
  );
}

export default App;
