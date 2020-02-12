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
            o[id] = 1;
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
        selectedCamStyles[camStyleId] = { [action.payload]: 1 };
      } else {
        selectedCamStyles[camStyleId] = {
          ...selectedCamStyles[camStyleId],
          [action.payload]:
            (selectedCamStyles[camStyleId][action.payload] || 0) + 1
        };
      }
      return {
        ...state,
        selectedCamStyles
      };
    }
    case getType(actions.deselectCam): {
      const { camStyleId } = state.entities.cams[action.payload];
      const selectedCams = Object.keys(
        state.selectedCamStyles[camStyleId]
      ).reduce((o, camId) => {
        if (Number(camId) !== action.payload) {
          o[camId] = state.selectedCamStyles[camStyleId][camId];
        } else if (state.selectedCamStyles[camStyleId][camId] > 1) {
          o[camId] = state.selectedCamStyles[camStyleId][camId] - 1;
        }
        return o;
      }, {});
      const selectedCamStyles = {
        ...state.selectedCamStyles
      };
      if (Object.values(selectedCams).length > 0) {
        selectedCamStyles[camStyleId] = selectedCams;
      } else {
        delete selectedCamStyles[camStyleId];
      }
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

export default (initialState: RootState) => (
  state = initialState,
  action: RootAction
) => reducer(state, action);
