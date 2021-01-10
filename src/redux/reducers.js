import actions from './action-types';
import {combineReducers} from 'redux';

function movies(state = [], action) {
    switch(action.type) {
        case actions.SET_MOVIES: {
            return action.payload
        }
        default: 
            return state;
    }
}

export default combineReducers({movies});
