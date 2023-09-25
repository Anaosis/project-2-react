
import { signInWithGoogle, signOut } from '../../apis/firebase/firebase';
import { START_LOADING, UPDATE_USER_DATA, UPDATE_USER_ERROR } from './UserConstants';

const startLoading = () => {
    return {
        type: START_LOADING
    }
}
const updateUserData = (payload) => {
    return {
        type: UPDATE_USER_DATA,
        payload: payload
    }
}
const updateUserError = (payload) => {
    return {
        type: UPDATE_USER_ERROR,
        payload: payload
    }
}

export function loginUser() {
    return (dispatch) => {
     
        dispatch(startLoading());

        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));

        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}


export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}