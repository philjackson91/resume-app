import * as actiontypes from '../actions/actiontypes';

const initialState = {
    posts: null
}
console.log('[postsReducer]', initialState.posts)
const postData = (state = initialState, action) => {
    if ( action.type === actiontypes.POST_DATA ) {
        return {
            ...state,
            posts: action.data
        }
    }
    return state;
    
}


export default postData;