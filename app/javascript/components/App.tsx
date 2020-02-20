import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Header } from "semantic-ui-react";

import store, { actions } from "../store";
import CamMenu from "./CamMenu";
import CamChart from "./CamChart";
import Rack from "./Rack";

const App = () => {
  useEffect(() => {
    store.dispatch(actions.fetchCamsAsync.request());
  });

  return (
    <Provider store={store}>
      <div>
        <header id="header">
          <Header as="h1">Compare Cams</Header>
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
    </Provider>
  );
};

export default App;
