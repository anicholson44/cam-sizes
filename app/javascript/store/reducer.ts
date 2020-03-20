import { getType } from "typesafe-actions";

import { RootState, RootAction } from "./types";
import actions from "./actions";

const defaultState = ({
  loading = false,
  entities = { manufacturers: {}, camStyles: {}, cams: {} },
  selectedCams = {},
  highlightedCams = {},
  highlightedCamRange,
  showDetailForCam,
  showDuplicatesInChart = true,
  showCamMenu = window.screen.width > 768,
  showRack = window.screen.width > 768
}: Partial<RootState>): RootState => ({
  loading,
  entities,
  selectedCams,
  highlightedCams,
  highlightedCamRange,
  showDetailForCam,
  showDuplicatesInChart,
  showCamMenu,
  showRack
});

const reducer = (
  state: RootState = defaultState({}),
  action: RootAction
): RootState => {
  switch (action.type) {
    case getType(actions.fetchCamsAsync.request): {
      return {
        ...state,
        loading: true
      };
    }
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
      return { ...state, loading: false, entities, selectedCams };
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
      let showDetailForCam = state.showDetailForCam;
      cams.forEach(id => {
        delete selectedCams[id];
        if (showDetailForCam === id) {
          showDetailForCam = defaultState({}).showDetailForCam;
        }
      });
      return {
        ...state,
        selectedCams,
        showDetailForCam
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
      let showDetailForCam = state.showDetailForCam;
      if (selectedCams[action.payload] > 1) {
        selectedCams[action.payload] -= 1;
      } else {
        delete selectedCams[action.payload];
        if (action.payload === showDetailForCam) {
          showDetailForCam = defaultState({}).showDetailForCam;
        }
      }
      return {
        ...state,
        selectedCams,
        showDetailForCam
      };
    }
    case getType(actions.deselectAllCams): {
      return {
        ...state,
        selectedCams: defaultState({}).selectedCams,
        showDetailForCam: defaultState({}).showDetailForCam
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
    case getType(actions.showDetailForCam): {
      return {
        ...state,
        showDetailForCam: action.payload
      };
    }
    case getType(actions.hideCamDetail): {
      return {
        ...state,
        showDetailForCam: defaultState({}).showDetailForCam
      };
    }
    case getType(actions.setShowDuplicatesInChart): {
      return {
        ...state,
        showDuplicatesInChart: action.payload
      };
    }
    case getType(actions.showCamMenu): {
      return {
        ...state,
        showCamMenu: true
      };
    }
    case getType(actions.hideCamMenu): {
      return {
        ...state,
        showCamMenu: false
      };
    }
    case getType(actions.showRack): {
      return {
        ...state,
        showRack: true
      };
    }
    case getType(actions.hideRack): {
      return {
        ...state,
        showRack: false
      };
    }
    default: {
      return state;
    }
  }
};

export default (initialState: Partial<RootState>) => (
  state = initialState,
  action: RootAction
) => reducer(defaultState(state), action);
