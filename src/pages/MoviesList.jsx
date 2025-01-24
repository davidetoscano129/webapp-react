import React from 'react';
import './MoviesList.css';

export default function MoviesList() {
    // Simulazione di un array di film per esempio visivo
    const movies = [
        { id: 1, title: 'Inception', description: 'A mind-bending thriller by Christopher Nolan.' },
        { id: 2, title: 'The Matrix', description: 'A sci-fi classic about reality and illusion.' },
        { id: 3, title: 'Interstellar', description: 'A journey through space and time.' },
    ];

    return (
        <div className="movies-list">
            <h1 className="movies-list-title">Movies List</h1>
            <p className="movies-list-description">
                Explore our collection of amazing movies! Click on any title for details.
            </p>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <h2 className="movie-title">{movie.title}</h2>
                        <p className="movie-description">{movie.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}