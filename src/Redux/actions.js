import cities from '../Constants/cities-json.json'

export const GET_DATA = 'GET_DATA'
export const SET_LIKED = 'SET_LIKED'




export function fetchData() {
    return ({ type: 'GET_DATA', payload: cities })
}

// export function handleLiked(id) {

// }