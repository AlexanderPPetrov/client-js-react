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
                    color="success" 
                    onClick={() => setCount(count + 1)}>
                    <div className="d-flex justify-content-center align-content-center">
                        <FontAwesomeIcon icon={faPlusCircle}/>
                    </div>
                </Button>
            </InputGroupAddon>
            <Input value={count} onChange={handleChange}/>
            <InputGroupAddon addonType="append">
                <Button 
                    color="danger" 
                    onClick={() => setCount(count - 1)}>
                    <div className="d-flex justify-content-center align-content-center">
                        <FontAwesomeIcon icon={faMinusCircle}/>
                    </div>
                </Button>
            </InputGroupAddon>
        </InputGroup>
    </div>
}
export default FunctionalComponent;