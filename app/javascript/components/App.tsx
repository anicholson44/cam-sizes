import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { Loader, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import store, { actions } from "../store";
import { RootState } from "../store/types";
import CamMenu from "./CamMenu";
import CamChart from "./CamChart";

const AppContainer = () => {
  const loading = useSelector<RootState>(({ loading }) => loading);

  return (
    <div>
      <header id="header">
        <Header as="h1">Cam Size Comparison</Header>
      </header>
      <div id="container">
        <div id="menu-container">
          <CamMenu />
        </div>
        <div id="chart-container">
          <CamChart />
        </div>
        {!!loading && <Loader active size="big" />}
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    store.dispatch(actions.fetchCamsAsync.request());
  });

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
