import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Feed from './pages/homepage/Feed';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="signup" element={<SignUp />}/>
          <Route path="feed" element={<Feed />}/>
          <Route path='profile' element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
