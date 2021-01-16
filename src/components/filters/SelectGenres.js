import { FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedGenres } from '../../redux/actions';
import { createSelector } from 'reselect';

const SelectGenres = (props) => {

    const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.selectedFilters)

    const inputOnChange = (event) => {
        const isChecked = event.target.checked;
        const genreId = event.target.value;
        let currentGenres = selectedFilters.selectedGenres;
        console.log('inputOnChange', isChecked, genreId);
        if(isChecked){
            currentGenres.push(genreId);
        }else {
            currentGenres = currentGenres.filter(id => id !== genreId);
        }
        dispatch(setSelectedGenres(currentGenres));
    }

    const getId = (_, id) => id;
    const getSelectedGenres = state => state.selectedGenres;

    const isGenreSelected = createSelector(
        getSelectedGenres,
        getId,
        (genres, id) => {
            return genres.includes(id)
        }
    )

    const isChecked = (genreId) => {
        const isChecked = isGenreSelected(selectedFilters, genreId);
        console.log('isChecked', genreId);
        return isChecked;
    }

    // TODO get from 
    // https://api.themoviedb.org/3/genre/movie/list?api_key=ca3d69ee336e43d8099727f0d7ce3859&language=en-US
   
    const genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]

    const getGenresCheckboxes = () => {
        const genresCheckboxes = genres.map(genre => {
            return <FormGroup check inline key={genre.id}>
                <Label check>
                    <Input type="checkbox" 
                    checked={isChecked(genre.id.toString())} 
                    value={genre.id}
                    onChange={inputOnChange}/> 
                    {genre.name}
                </Label>
            </FormGroup>
        })
        return genresCheckboxes;
    }

    return (
        <FormGroup>
            <Label>Select genres</Label>
            <div>
                {getGenresCheckboxes()}
            </div>
        </FormGroup>
       
    );
}

export default SelectGenres;