import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { filter, exhaustMap, map, tap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { RootEpic, EntitiesState } from './types';
import actions from './actions';

const fetchCamsEpic: RootEpic = (action$) => 
    action$.pipe(
        filter(isActionOf(actions.fetchCamsAsync.request)),
        exhaustMap(() =>
            ajax({
                url: 'api/cams',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).pipe(
                map(({ response }) => actions.fetchCamsAsync.success(response as EntitiesState, { camelize: true }))
            )
        )
    );

const epic: RootEpic = combineEpics(fetchCamsEpic);

export default epic;
