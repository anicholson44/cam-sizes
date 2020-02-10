import { createAsyncAction, createAction } from 'typesafe-actions';

import { EntitiesState } from './types';

const fetchCamsAsync = createAsyncAction(
    'FETCH_CAMS_REQUEST',
    'FETCH_CAMS_SUCCESS',
    'FETCH_CAMS_FAILURE'
)<void, [EntitiesState, { camelize: true }], Error>();

const selectCamStyle = createAction('SELECT_CAM_STYLE')<number>();
const deselectCamStyle = createAction('DESELECT_CAM_STYLE')<number>();

export default {
    fetchCamsAsync,
    selectCamStyle,
    deselectCamStyle
};
