import { RootState, Cam } from "./types";

export const getEntities = (state: RootState) => state.entities;

export const getCams = (state: RootState) => getEntities(state).cams;

export const getCamStyles = (state: RootState) => getEntities(state).camStyles;

export const getSelectedCamStyles = (state: RootState) =>
  state.selectedCamStyles;

export const getSelectedCams = (state: RootState): Cam[] =>
  Object.values(getSelectedCamStyles(state)).reduce((a, camIds) => {
    return [
      ...a,
      ...Object.keys(camIds).map(camId => getCams(state)[Number(camId)])
    ];
  }, []);
