import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <h1>Welcome to Cat API React App</h1>
            <div className="link-container">
                <Link to="/breeds" className="nav-link">View Cat Breeds</Link>
                <Link to="/images" className="nav-link">View Random Cat Images</Link>
            </div>
        </div>
    );
}

export default App;
