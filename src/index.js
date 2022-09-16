import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import Screen1 from './components/onboarding/Screen1';
import Screen2 from './components/onboarding/Screen2';
import Screen3 from './components/onboarding/Screen3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="onboarding1" element={<Screen1 />} />
        <Route path="onboarding2" element={<Screen2 />} />
        <Route path="onboarding3" element={<Screen3 />} />
        <Route path="login" element={<Login />} />
        <Route path="welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
