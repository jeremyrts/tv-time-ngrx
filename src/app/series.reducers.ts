import { createReducer, on } from '@ngrx/store';
import { addSerie, deleteSerie, toggleSeen } from './series.actions'


export const initialState = [
    // {id: 0, title: "Snowpiercer", seen: true}
]

const _seriesReducer = createReducer(
    initialState,
    on(addSerie, (state, {serie}) => ([...state, serie])),
    on(deleteSerie, (state, {id}) => state.filter(serie => serie.id !== id)),
    on(toggleSeen, (state, {id}) =>  {
        let newState = [...state]
        let arrayId = state.findIndex(serie => serie.id === id)
        console.log(newState[arrayId])
        let serieToModify = state.find(serie => serie.id)
        let newObject = {...serieToModify, seen: !serieToModify.seen}
        // newState[arrayId].seen = !newState[arrayId].seen
        newState[arrayId] = newObject

        return newState
    } )
)

export function seriesReducer(state, action) {
    return _seriesReducer(state, action)
}
