import Movie from '../components/movie/Movie';
import Filters from '../components/filters/Filters';
import {useSelector} from "react-redux";
import { Alert } from 'reactstrap';

function Movies(props) {

    const movies = useSelector(state => state.movies);

    const getMovies = () => {

        if(!movies.length){
            return <div className="col">
                <Alert color="secondary" className="text-center p-5 mt-3">
                    There are no movies
                </Alert>
            </div>
        }

        //TODO based on the current state in redux 
        // render different movie list

        //TODO render pagination?
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
            <Filters/>
            <div className="row">
                {getMovies()}
            </div>
        </div>
    </>
}
export default Movies;