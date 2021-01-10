import Movie from '../components/movie/Movie';
import SelectYear from '../components/filters/SelectYear';
import {useSelector} from "react-redux";

function Movies(props) {

    const movies = useSelector(state => state.movies);

    const getMovies = () => {
        const movieList = movies.map(movie => {
            return <Movie
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
            />
        })
        return movieList;
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <SelectYear/>
                </div>
            </div>
            <div className="row">
                {getMovies()}
            </div>
        </div>
    </>
}
export default Movies;