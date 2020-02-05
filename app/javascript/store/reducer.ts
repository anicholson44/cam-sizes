import { createReducer } from 'typesafe-actions';
import { RootState } from './types';
import actions from './actions';

const initialState: RootState = {
    manufacturers: [],
    camStyles: [],
    cams: []
}

export default createReducer(initialState)
    .handleAction(actions.fetchCamsAsync.success, (_, { payload }) => payload);
