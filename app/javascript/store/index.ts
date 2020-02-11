import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import camelize from "redux-camelize";

import reducer from "./reducer";
import epic from "./epic";
import localStorageMiddleware, { rootStateStorage } from "./middleware/local-storage";

export { default as actions } from "./actions";
export * from "./types";
import * as selectors from "./selectors";
export { selectors };

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer(rootStateStorage.get()),
  composeWithDevTools(
    applyMiddleware(camelize(), epicMiddleware, localStorageMiddleware)
  )
);

epicMiddleware.run(epic);

export default store;
