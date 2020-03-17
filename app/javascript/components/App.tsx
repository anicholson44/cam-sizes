import React from "react";
import { Provider, useSelector } from "react-redux";
import { Header } from "semantic-ui-react";

import store, { actions, RootState } from "../store";
import CamMenu from "./CamMenu";
import CamChart from "./CamChart";
import Rack from "./Rack";

store.dispatch(actions.fetchCamsAsync.request());

const App = () => {
  const loading = useSelector<RootState>(({ loading }) => loading);
  return (
    !loading && (
      <div>
        <header id="header">
          <Header as="h1">Compare Trad Climbing Cams</Header>
        </header>
        <div id="container">
          <div id="menu-container">
            <CamMenu />
          </div>
          <div id="chart-container">
            <CamChart />
          </div>
          <div id="rack-container">
            <Rack />
          </div>
        </div>
      </div>
    )
  );
};

const AppProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppProvider;
