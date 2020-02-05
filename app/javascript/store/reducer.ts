import { createReducer, getType } from 'typesafe-actions';
import produce from 'immer';

import { RootState, RootAction } from './types';
import actions from './actions';

const initialState: RootState = {
    entities: {
        manufacturers: [],
        camStyles: [],
        cams: []
    }
};

const loadingReducer = produce((draftState, { type }) => {
    switch(type) {
        case getType(actions.fetchCamsAsync.request): {
            draftState.loading = true;
            break;
        }
        case getType(actions.fetchCamsAsync.failure):
        case getType(actions.fetchCamsAsync.success): {
            draftState.loading = false;
            break;
        }
    }
});

const entitiesReducer = createReducer(initialState)
    .handleAction(actions.fetchCamsAsync.success, produce((draftState, { payload }) => {
        draftState.entities = payload;
    }));

export default (state: RootState, action: RootAction) => 
    [entitiesReducer, loadingReducer].reduce((newState, reducer) => reducer(newState, action), state);
