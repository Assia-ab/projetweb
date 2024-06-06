// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MonCV from './MonCV';
import FormPage from './FormPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MonCV />} />
                <Route path="/form" element={<FormPage />} />
            </Routes>
        </Router>
    );
}

export default App;
