import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import camelize from "redux-camelize";

import createReducer from "./reducer";
import epic from "./epic";
import localStorageMiddleware, {
  selectedCamsStorage
} from "./middleware/local-storage";

export { default as actions } from "./actions";
export * from "./types";
import * as selectors from "./selectors";
export { selectors };

const epicMiddleware = createEpicMiddleware();

const urlParams = new URLSearchParams(window.location.search);
const selectedCamsParam = urlParams.get("selectedCams");
let selectedCams;
try {
  selectedCams = JSON.parse(decodeURI(selectedCamsParam));
} catch (e) {
  selectedCams = selectedCamsStorage.get();
}

const store = createStore(
  createReducer({ selectedCams }),
  composeWithDevTools(
    applyMiddleware(camelize(), epicMiddleware, localStorageMiddleware)
  )
);

epicMiddleware.run(epic);

export default store;
