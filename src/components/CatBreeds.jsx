import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBreeds } from '../api';
import '../App.css';

function CatBreeds() {
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBreeds = async () => {
            try {
                const data = await fetchBreeds();
                setBreeds(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadBreeds();
    }, []);

    return (
        <div className="cat-breeds">
            <div className="header-container">
                <h2>Cat Breeds</h2>
                <Link to="/" className="nav-link back-button">Back to Home</Link>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <ul>
                    {breeds.map((breed) => (
                        <li key={breed.id}>{breed.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CatBreeds;

