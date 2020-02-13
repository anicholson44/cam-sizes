import { RootState, IdStore } from "./types";

export const getEntities = (state: RootState) => state.entities;

export const getCams = (state: RootState) => getEntities(state).cams;

export const getCamStyles = (state: RootState) => getEntities(state).camStyles;

export const getCamsStyleSelected = (id: number) => (state: RootState): boolean =>
  getCamStyles(state)[id].cams.reduce(
    (selected, camId) => selected && !!getSelectedCams(state)[camId],
    true
  );

export const getSelectedCams = (state: RootState): IdStore<number> =>
  state.selectedCams;
