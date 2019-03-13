import * as actionTypes from '../actions/actiontypes';

const initialState = {
    userData: {
        userData: null
    }
}


const newUserData = (state = initialState, action) => {
    if ( action.type === actionTypes.FETCH_DATA ) {
        return {
            ...state,
            userData: action.data
        }
    }
    return state;
}

export default newUserData;