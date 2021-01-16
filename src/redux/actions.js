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

export const getGenres = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'genre/movie/list',
            params,
        )
        dispatch(setGenres(response.genres));
    } catch (error) {
        console.log(error)
    }
}

export function setSelectedYear(year){
    return {type: actions.SET_SELECTED_YEAR, payload: year};
}

export function setSelectedGenres(genres){
    return {type: actions.SET_SELECTED_GENRES, payload: genres};
}

export function setGenres(genres){
    return {type: actions.SET_GENRES, payload: genres};
}

export function setListView(value){
    return {type: actions.SET_LIST_VIEW, payload: value};
}