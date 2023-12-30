import React from 'react';
import { Routes, Route } from "react-router-dom";
import AccountActivated from './Components/AccountActivated';
import ResetPassword from './Components/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path="/activate" element={<AccountActivated />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
