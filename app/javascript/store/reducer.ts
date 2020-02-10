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
  selectedCamStyles: { }
};

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

export default reducer;
