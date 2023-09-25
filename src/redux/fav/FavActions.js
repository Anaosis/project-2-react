
import { ADD_TO_FAV, REMOVE_FROM_FAV} from './FavConstants';

export function addToFav(payload) {
    return {
        type: ADD_TO_FAV,
        payload
    }
}

export function removeFromFav(payload) {
    return {
        type: REMOVE_FROM_FAV,
        payload
    }
}