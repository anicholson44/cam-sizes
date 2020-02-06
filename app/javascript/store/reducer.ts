import { createReducer, getType } from "typesafe-actions";
import produce from "immer";

import { RootState, RootAction } from "./types";
import actions from "./actions";

const initialState: RootState = {
  entities: {
    manufacturers: {},
    camStyles: {},
    cams: {}
  },
  loading: false,
  selectedCamStyles: { }
};

const loadingReducer = produce((draftState, { type }) => {
  switch (type) {
    case getType(actions.fetchCamsAsync.request): {
      draftState.loading = true;
      break;
    }
    case getType(actions.fetchCamsAsync.failure):
    case getType(actions.fetchCamsAsync.success): {
      draftState.loading = false;
      break;
    }
  }
});

const reducer = createReducer(initialState, {
  [getType(actions.fetchCamsAsync.success)]: produce(
    (draftState, { payload }) => {
      draftState.entities = payload;
      draftState.selectedCamStyles[Object.keys(payload.camStyles)[0]] = true;
    }
  ),
  [getType(actions.selectCamStyle)]: produce((draftState, { payload: id }) => {
    if (draftState.selectedCamStyles[id]) {
      delete draftState.selectedCamStyles[id];
    } else {
      draftState.selectedCamStyles[id] = true;
    }
  })
});

export default (state: RootState, action: RootAction) =>
  [reducer, loadingReducer].reduce((newState, r) => r(newState, action), state);
