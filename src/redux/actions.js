import actions from './action-types';
import networkClient from '../network/network-client';

export function setMovies(movies){
    return {type: actions.SET_MOVIES, payload: movies};
}

export const getMovies = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'discover/movie',
            params,
        )
        dispatch(setMovies(response.results));
    } catch (error) {
        console.log(error)
    }
}

export function setSelectedYear(year){
    console.log(year);
    return {type: actions.SET_SELECTED_YEAR, payload: year};
}

export function setSelectedGenres(genres){
    return {type: actions.SET_SELECTED_GENRES, payload: genres};
}