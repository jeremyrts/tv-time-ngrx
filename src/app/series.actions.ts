import { createAction, props } from '@ngrx/store';
import { Serie } from './serie';

export const getAllSeries = createAction('[Series Components] GetAllSeries');
export const getSerieById = createAction(
    '[Series Components] GetSerieById',
    props<{id: number}>()
);

export const addSerie = createAction(
    '[Series Component] AddSerie', 
    props<{serie: Serie}>()
)

export const deleteSerie = createAction(
    '[Series Component] DeleteSerie', 
    props<{id: number}>()
)

export const toggleSeen = createAction(
    '[Series Component] ToggleSeen',
    props<{id: number}>()
)