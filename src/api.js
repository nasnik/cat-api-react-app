const API_KEY = import.meta.env.VITE_CAT_API_KEY;
const BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchBreeds = async () => {
    try {
        const response = await fetch(`${BASE_URL}/breeds`, {
            headers: {
                'x-api-key': API_KEY,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch cat breeds');
    }
};

export const fetchCatImages = async () => {
    try {
        const response = await fetch(`${BASE_URL}/images/search?limit=5`, {
            headers: {
                'x-api-key': API_KEY,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch cat images');
    }
};