import { getType } from "typesafe-actions";

import { RootState, RootAction } from "./types";
import actions from "./actions";

const initialState: RootState = {
  entities: {
    manufacturers: {},
    camStyles: {},
    cams: {}
  },
  selectedCamStyles: {},
  selectedCams: {}
};

const reducer = (state: RootState = initialState, action: RootAction) => {
  switch (action.type) {
    case getType(actions.fetchCamsAsync.success): {
      const { payload: entities } = action;
      return { ...state, entities };
    }
    case getType(actions.selectCamStyle): {
      return {
        ...state,
        selectedCamStyles: {
          ...state.selectedCamStyles,
          [action.payload]: true
        }
      };
    }
    case getType(actions.deselectCamStyle): {
      const selectedCamStyles = { ...state.selectedCamStyles };
      delete selectedCamStyles[action.payload];
      return {
        ...state,
        selectedCamStyles
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
