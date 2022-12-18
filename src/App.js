import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <>
      <Routes>
        <Route path ='/' element={<Home /> } />
        <Route path ='/login' element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
