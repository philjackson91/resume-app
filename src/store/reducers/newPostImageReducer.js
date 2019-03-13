import * as actiontypes from '../actions/actiontypes';

const initialState = {
    src: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1'
}

const newPostImageReducer = (state = initialState, action) => {
    if ( action.type === actiontypes.NEW_POST_IMAGE ) {
        return {
            ...state,
            src: action.pic
        }
    }
    return state;
    
}


export default newPostImageReducer;