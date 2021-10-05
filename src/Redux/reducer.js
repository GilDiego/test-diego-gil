import { GET_DATA, SET_LIKED } from "./actions";

const initialState = {
    loadedCards: [],
    likedCards: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                loadedCards: action.payload
            }
        // case SET_LIKED:
        //     return {
        //         ...state,
        //         likedCards: action.payload
        //     }
        default:
            break;
    }
}

export default rootReducer