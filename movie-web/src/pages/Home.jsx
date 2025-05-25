import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api.js";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
        try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        } catch (err) {
            console.log(err);
            setError("Failed to load movies...");
        } finally {
            setLoading(false);
        }
        };

        loadPopularMovies();
    }, []);

    const handleSearch = (e)=> {
        e.preventDefault();
        alert(searchQuery);
    }

    return(
        <div className="home">
            <form className="search-form" onSubmit={handleSearch} >
                <input 
                    type="text" 
                    placeholder="Search for movie name=..." 
                    className="search-input"
                    value = {searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            <div className="movie-grid">
                {movies.map(
                    (movie) =>
                        (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
        </div>
    );
}

export default Home