import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Loader, Header } from 'semantic-ui-react';

import store, { actions } from '../store';
import { RootState } from '../store/types';
import CamMenu from './CamMenu';

import 'semantic-ui-css/semantic.min.css';

const AppContainer = () => {
    const loading = useSelector<RootState>(({ loading }) => loading);
    
    return (
        <div id='container'>
            <Loader active={!!loading} size='big' />
            <div id='center-column'>
                <div id='header'>
                    <Header as='h1'>Cam Size Comparison</Header>
                </div>
                <CamMenu />
            </div>
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
