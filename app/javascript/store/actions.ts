import { createAsyncAction } from 'typesafe-actions';

import { RootState } from './types';

const fetchCamsAsync = createAsyncAction(
    'FETCH_CAMS_REQUEST',
    'FETCH_CAMS_SUCCESS',
    'FETCH_CAMS_FAILURE'
)<void, [RootState, { camelize: true }], Error>();

export default {
    fetchCamsAsync
};
