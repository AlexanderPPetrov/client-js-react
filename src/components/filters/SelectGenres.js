import { FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setSelectedGenres } from '../../redux/actions';
const SelectGenres = (props) => {

    const dispatch = useDispatch();

    let selectedGenres = [];
    const inputOnChange = (event) => {
        const isChecked = event.target.checked;
        const genreId = event.target.value;
        if(isChecked){
            if(!selectedGenres.includes(genreId)){
                selectedGenres.push(genreId);
            }
        }else {
            selectedGenres = selectedGenres.filter(el => el !== genreId);
        }
        dispatch(setSelectedGenres(selectedGenres));
    }
    return (
       <div>
          <FormGroup check inline>
            <Label check>
                <Input type="checkbox" value="28" onChange={inputOnChange}/> Action
            </Label>
        </FormGroup>
        <FormGroup check inline>
            <Label check>
                <Input type="checkbox" value="12" onChange={inputOnChange} /> Adventure
            </Label>
        </FormGroup>
       </div>
    );
}

export default SelectGenres;