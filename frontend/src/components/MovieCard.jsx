import PropTypes from "prop-types";
import '../css/MovieCard.css'

function MovieCard({movie}){

    function onFavorite(){
        alert("clicked")
    }

return(
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt ={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavorite}>❤</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p> {/*? to account for undefined method behavior*/}
        </div>
    </div>
)
}

export default MovieCard

MovieCard.propTypes = {
    movie: PropTypes.string.isRequired
  };