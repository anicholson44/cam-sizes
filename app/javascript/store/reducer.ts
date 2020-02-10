import { getType } from "typesafe-actions";

import { RootState, RootAction } from "./types";
import actions from "./actions";

const defaultState: RootState = {
  entities: {
    manufacturers: {},
    camStyles: {},
    cams: {}
  },
  selectedCamStyles: {}
};

const reducer = (
  state: RootState = defaultState,
  action: RootAction
): RootState => {
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
          [action.payload]: state.entities.camStyles[
            action.payload
          ].cams.reduce((o, id) => {
            o[id] = true;
            return o;
          }, {})
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
    case getType(actions.selectCam): {
      const selectedCamStyles = { ...state.selectedCamStyles };
      const { camStyleId } = state.entities.cams[action.payload];
      if (!selectedCamStyles[camStyleId]) {
        selectedCamStyles[camStyleId] = { [action.payload]: true };
      } else {
        selectedCamStyles[camStyleId] = {
          ...selectedCamStyles[camStyleId],
          [action.payload]: true
        };
      }
      return {
        ...state,
        selectedCamStyles
      };
    }
    case getType(actions.deselectCam): {
      const { camStyleId } = state.entities.cams[action.payload];
      const selectedCamStyles = {
        ...state.selectedCamStyles,
        [camStyleId]: Object.keys(state.selectedCamStyles[camStyleId]).reduce(
          (o, camId) => {
            if (Number(camId) !== action.payload) {
              o[camId] = true;
            }
            return o;
          },
          {}
        )
      };
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

export default initialState => (state = initialState, action) =>
  reducer(state, action);
