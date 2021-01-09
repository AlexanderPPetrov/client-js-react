import React, {Component} from 'react';
import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

class ClassComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "My first component",
        }
    }

    componentDidMount(){
        this.setState({
            title: 'my component is on the screen'
        }, ()=> {
            console.log(this.state.title)
        })
    }

    render () {
        return <div className="my-2">
            <Alert color="success">
                <FontAwesomeIcon icon={faCube} className="mr-2"/>
                {this.state.title}
            </Alert>
        </div>
    }
}

export default ClassComponent;