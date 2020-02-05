import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import store, { actions } from '../store';

const App = () => {
    useEffect(() => {
        store.dispatch(actions.fetchCamsAsync.request())
    });
    
    return (
        <Provider store={store}>
            <div></div>
        </Provider>
    );
};

export default App;
