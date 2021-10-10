import cities from '../API/cities-json.json'

export const GET_DATA = 'GET_DATA'
export const HANDLE_LIKED = 'HANDLE_LIKED'
export const HANDLE_MODAL = 'HANDLE_MODAL'




export function fetchData(qtty) {
    let json = cities.slice(0, qtty)
    return ({ type: 'GET_DATA', payload: json })
}

export function handleLiked(title) {
    let target = cities.find(city => city.title === title)
    target.liked = !target.liked
    let allLiked = cities.filter(city => city.liked)

    return ({ type: 'HANDLE_LIKED', payload: allLiked })
}

export function handleModal(title) {
    let modal;
    if (title) {
        modal = cities.find(city => city.title === title)
    }
    else {
        modal = null
    }
    return ({ type: 'HANDLE_MODAL', payload: modal })
}