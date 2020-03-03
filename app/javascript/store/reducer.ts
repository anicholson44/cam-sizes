import { getType } from "typesafe-actions";

import { RootState, RootAction } from "./types";
import actions from "./actions";

const defaultState: RootState = {
  entities: {
    manufacturers: {},
    camStyles: {},
    cams: {}
  },
  selectedCams: {},
  highlightedCams: {},
  highlightedCamRange: undefined
};

const reducer = (
  state: RootState = defaultState,
  action: RootAction
): RootState => {
  switch (action.type) {
    case getType(actions.fetchCamsAsync.success): {
      const { payload: entities } = action;
      let { selectedCams } = state;
      if (Object.keys(selectedCams).length === 0) {
        selectedCams = Object.keys(entities.cams).reduce((o, id) => {
          if (
            entities.cams[Number(id)].camStyleId ===
            Number(Object.keys(entities.camStyles)[0])
          ) {
            o[Number(id)] = 1;
          }
          return o;
        }, {});
      }
      return { ...state, entities, selectedCams };
    }
    case getType(actions.selectCamStyle): {
      const { cams } = state.entities.camStyles[action.payload];
      return {
        ...state,
        selectedCams: {
          ...state.selectedCams,
          ...cams.reduce((o, id) => {
            o[id] = 1;
            return o;
          }, {})
        }
      };
    }
    case getType(actions.deselectCamStyle): {
      const { cams } = state.entities.camStyles[action.payload];
      const selectedCams = {};
      Object.assign(selectedCams, state.selectedCams);
      cams.forEach(id => delete selectedCams[id]);
      return {
        ...state,
        selectedCams
      };
    }
    case getType(actions.selectCam): {
      return {
        ...state,
        selectedCams: {
          ...state.selectedCams,
          [action.payload]: (state.selectedCams[action.payload] || 0) + 1
        }
      };
    }
    case getType(actions.deselectCam): {
      const selectedCams = {};
      Object.assign(selectedCams, state.selectedCams);
      if (selectedCams[action.payload] > 1) {
        selectedCams[action.payload] -= 1;
      } else {
        delete selectedCams[action.payload];
      }
      return {
        ...state,
        selectedCams
      };
    }
    case getType(actions.deselectAllCams): {
      return {
        ...state,
        selectedCams: defaultState.selectedCams
      };
    }
    case getType(actions.highlightCamStyle): {
      const { cams } = state.entities.camStyles[action.payload];
      return {
        ...state,
        highlightedCams: {
          ...state.highlightedCams,
          ...cams.reduce((o, id) => {
            if (state.selectedCams[id]) {
              o[id] = true;
            }
            return o;
          }, {})
        }
      };
    }
    case getType(actions.highlightCam): {
      const highlightedCams = {};
      Object.assign(highlightedCams, state.highlightedCams);
      if (state.selectedCams[action.payload]) {
        highlightedCams[action.payload] = true;
      }
      return {
        ...state,
        highlightedCams
      };
    }
    case getType(actions.unhighlightCams): {
      return {
        ...state,
        highlightedCams: {}
      };
    }
    case getType(actions.highlightCamRange): {
      return {
        ...state,
        highlightedCamRange: action.payload
      };
    }
    case getType(actions.unhighlightCamRange): {
      return {
        ...state,
        highlightedCamRange: undefined
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
