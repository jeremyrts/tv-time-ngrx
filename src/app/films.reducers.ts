import { createReducer, on } from '@ngrx/store';
import { addFilm, deleteFilm, toggleSeen } from './films.actions'


export const initialState = [
    {id: 0, title: "Ratatouille", seen: true},
    {id: 1, title: "Tenet", seen: false},
    {id: 2, title: "Train to Busan", seen: true}
]

const _filmsReducer = createReducer(
    initialState,
    on(addFilm, (state, {film}) => ([...state, film])),
    on(deleteFilm, (state, {id}) => state.filter(film => film.id !== id)),
    on(toggleSeen, (state, {id}) =>  {
        let newState = [...state]
        let arrayId = state.findIndex(film => film.id === id)
        let filmToModify = state.find(film => film.id === id)
        let newObject = {...filmToModify, seen: !filmToModify.seen}
        newState[arrayId] = newObject
        return newState
    } )
)

export function filmsReducer(state, action) {
    return _filmsReducer(state, action)
}


