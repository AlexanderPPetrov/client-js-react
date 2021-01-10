import React, {useEffect, useCallback} from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { getMovies, setSelectedYear } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const SelectYear = (props) => {

    const selectedYear = useSelector(state => state.selectedYear);
    const selectedGenres = useSelector(state => state.selectedGenres);

    const dispatch = useDispatch();

    const loadMovies = useCallback(() => {
        dispatch(getMovies({
            year: selectedYear,
            page: 1,
            with_genres: selectedGenres.toString(),
        }));
      }, [dispatch, selectedYear, selectedGenres]);
    

    useEffect(() => {
        loadMovies();
    }, [loadMovies]);

    const changeSelectedYear = (event) => {
        dispatch(setSelectedYear(event.target.value));
    }
    return (
        <FormGroup>
            <Label for="select-year">Select year</Label>
            <Input 
            onChange={changeSelectedYear} 
            value={selectedYear}
            type="select" 
            name="select" 
            id="select-year"
            >
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            </Input>
        </FormGroup>
    );
}

export default SelectYear;