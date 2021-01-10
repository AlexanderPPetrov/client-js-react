import SelectYear from './SelectYear';
import SelectGenres from './SelectGenres';


const Filters = (props) => {

    return (
        <div className="row">
            <div className="col-md-4">
                <SelectYear/>
            </div>
            <div className="col-md-4">
                <SelectGenres/>
            </div>
        </div>
    );
}

export default Filters;