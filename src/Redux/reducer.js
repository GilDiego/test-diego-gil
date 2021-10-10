import { GET_DATA, HANDLE_LIKED, HANDLE_MODAL } from "./actions";

const initialState = {
    loadedCards: [],
    likedCards: [],
    modal: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                loadedCards: action.payload
            }
        case HANDLE_LIKED:
            return {
                ...state,
                likedCards: action.payload
            }
        case HANDLE_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        default:
            break;
    }
}

export default rootReducer