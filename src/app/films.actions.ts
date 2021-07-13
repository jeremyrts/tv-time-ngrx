import { createAction, props } from '@ngrx/store';
import { Film } from './film';

export const getAllFilms = createAction('[Films Components] GetAllFilms');
export const getFilmById = createAction(
    '[Films Components] GetFilmById',
    props<{id: number}>()
);

export const addFilm = createAction(
    '[Film Component] AddFilm', 
    props<{film: Film}>()
)

export const deleteFilm = createAction(
    '[Film Component] DeleteFilm', 
    props<{id: number}>()
)

export const toggleSeen = createAction(
    '[Films Component] ToggleSeen',
    props<{id: number}>()
)