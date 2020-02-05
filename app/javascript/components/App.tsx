import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Loader } from 'semantic-ui-react';

import store, { actions } from '../store';
import { RootState } from '../store/types';

import 'semantic-ui-css/semantic.min.css';

const AppContainer = () => {
    const loading = useSelector<RootState>(({ loading }) => loading);
    
    return (
        <div id='container'>
            <Loader active={!!loading} size='big' />
        </div>
    );
};

const App = () => {
    useEffect(() => {
        store.dispatch(actions.fetchCamsAsync.request())
    });

    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};

export default App;
