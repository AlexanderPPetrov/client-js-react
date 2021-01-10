import actions from './action-types';
import networkClient from '../network/network-client';

export function setMovies(movies){
    return {type: actions.SET_MOVIES, payload: movies};
}

export async function getMovies(dispatch){
    try {
        const response = await networkClient.get(
            'discover/movie',
            {
                year: 2020,
                page: 1,
            }
        )
        dispatch(setMovies(response.results));
    } catch (error) {
        console.log(error)
    }
}