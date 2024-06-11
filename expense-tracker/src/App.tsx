import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExpenseTracker />} />
       
      </Routes>
    </Router>
  );
};

export default App;
