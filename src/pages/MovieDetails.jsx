import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css';

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/movies/${id}`)
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Errore nella richiesta:', error);
                setError('Errore nel caricamento dei dettagli del film');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="movie-details">
            <h1 className="movie-title">{movie.title}</h1>
            <img
                src={`http://localhost:4000/images/${movie.image}`}
                alt={movie.title}
                className="movie-image"
            />
            <p className="movie-abstract">{movie.abstract}</p>
            <div className="reviews-section">
                <h2>Reviews</h2>
                {movie.reviews?.length > 0 ? (
                    <ul className="reviews-list">
                        {movie.reviews.map((review) => (
                            <li key={review.id}>
                                <span className="review-author">{review.author}:</span>
                                <span className="review-content">{review.content}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        </div>
    );
}