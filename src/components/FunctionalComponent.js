import { 
    Alert,
    InputGroup,
    InputGroupAddon,
    Input, 
    Button 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


function FunctionalComponent(props) {

    const [count, setCount] = useState(0);

    const handleChange = (event) => {
        setCount(event.target.value)
    }

    return <div className="my-2">
        <Alert color="info">
            <FontAwesomeIcon icon={faCubes} className="mr-2"/>
            {props.title}
        </Alert>

        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <Button 
                    className="d-flex justify-content-center align-content-center"
                    color="success" 
                    onClick={() => setCount(count + 1)}>
                    <FontAwesomeIcon icon={faPlusCircle}/>
                </Button>
            </InputGroupAddon>
            <Input value={count} onChange={handleChange}/>
            <InputGroupAddon addonType="append">
                <Button 
                    className="d-flex justify-content-center align-content-center"
                    color="danger" 
                    onClick={() => setCount(count - 1)}>
                    <FontAwesomeIcon icon={faMinusCircle}/>
                </Button>
            </InputGroupAddon>
        </InputGroup>
    </div>
}
export default FunctionalComponent;