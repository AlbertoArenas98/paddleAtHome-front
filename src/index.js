import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';


const Container = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      </Route>
    </Routes>
  </BrowserRouter>

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
