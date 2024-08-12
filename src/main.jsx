import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CatBreeds from './components/CatBreeds';
import CatImages from './components/CatImages';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/breeds" element={<CatBreeds />} />
                <Route path="/images" element={<CatImages />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);