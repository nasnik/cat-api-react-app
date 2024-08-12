import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCatImages } from '../api';
import '../App.css';

function CatImages() {
    const [catImages, setCatImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCatImages = async () => {
            try {
                const data = await fetchCatImages();
                setCatImages(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadCatImages();
    }, []);

    return (
        <div className="cat-images">
            <div className="header-container">
                <h2>Random Cat Images</h2>
                <Link to="/" className="nav-link back-button">Back to Home</Link>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div>
                    {catImages.map((image) => (
                        <img key={image.id} src={image.url} alt="A Random Cat" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', marginBottom: '20px' }} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CatImages;

