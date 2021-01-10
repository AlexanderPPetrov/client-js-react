import React, {useEffect} from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { getMovies } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const SelectYear = (props) => {
   
    const dispatch = useDispatch();

    const loadMovies = () => {
        //TODO
        dispatch(getMovies);
    }

    useEffect(() => {
        dispatch(getMovies);
    }, []);
    return (
        <FormGroup>
            <Label for="select-year">Select year</Label>
            <Input type="select" name="select" id="select-year">
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            </Input>
        </FormGroup>
    );
}

export default SelectYear;