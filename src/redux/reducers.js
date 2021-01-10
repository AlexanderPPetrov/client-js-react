import actions from './action-types';
import {combineReducers} from 'redux';

function movies(state = [], action) {
    switch(action.type) {
        case actions.SET_MOVIES: {
            return [...action.payload]
        }
        default: 
            return state;
    }
}

function selectedYear(state = '2021', action) {
    switch(action.type) {
        case actions.SET_SELECTED_YEAR: {
            return action.payload
        }
        default: 
            return state;
    }
}
function selectedGenres(state = [], action) {
    switch(action.type) {
        case actions.SET_SELECTED_GENRES: {
            return [...action.payload]
        }
        default: 
            return state;
    }
}

export default combineReducers({movies, selectedYear, selectedGenres});
