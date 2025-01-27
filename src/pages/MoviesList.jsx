import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MoviesList.css';

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/movies')
            .then((response) => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Errore nella richiesta:', error);
                setError('Errore nel caricamento della lista dei film');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="movies-list">
            <h1>Movies List</h1>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/movies/${movie.id}`}>
                            <img
                                src={movie.image ? `http://localhost:4000/images/${movie.image}` : '/fallback.jpg'}
                                alt={movie.title}
                                className="movie-image"
                            />
                            <h2 className="movie-title">{movie.title}</h2>
                        </Link>
                        <p className="movie-description">{movie.abstract || 'No description available.'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}