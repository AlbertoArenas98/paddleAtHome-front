import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUser } from './hooks';
import Context from "./store";
import App from './App';
import Login from './pages/authPage/Login'
import Register from './pages/authPage/Register'
import Home from './pages/homePage/Home'
import Profile from './pages/profilePage/Profile';
import PathNotFound from './pages/pathNotFound/PathNotFound';
import Preferences from './pages/preferencesPage/PreferencesPage';




const Container = () => {
  const [user, setUser] = useUser();

  return (
    <Context.Provider
      value={{ user, setUser }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="preferences" element={<Preferences />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PathNotFound />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
