import { RootState, IdStore, Cam } from "./types";

export const getEntities = (state: RootState) => state.entities;

export const getCams = (state: RootState) => getEntities(state).cams;

export const getCamStyles = (state: RootState) => getEntities(state).camStyles;

export const getCamStyleSelected = (id: number) => (
  state: RootState
): boolean =>
  getCamStyles(state)[id].cams.reduce(
    (selected, camId) => selected || !!getSelectedCams(state)[camId],
    false
  );

export const getSelectedCams = (state: RootState): IdStore<number> =>
  state.selectedCams;

const getCamsInRange = (cams: Cam[]) => ({
  rangeMin,
  rangeMax
}: {
  rangeMin: number;
  rangeMax: number;
}) => {
  console.log(cams)
  return cams.filter(
    cam =>
      (cam.rangeMax >= rangeMin && cam.rangeMin <= rangeMax) ||
      (cam.rangeMax <= rangeMin && cam.rangeMin >= rangeMax)
  );
}

export const getSelectedCamsInRange = (
  state: RootState
): (({ rangeMin, rangeMax }: Pick<Cam, "rangeMin" | "rangeMax">) => Cam[]) =>
  getCamsInRange(
    Object.keys(state.selectedCams).map(id => state.entities.cams[id])
  );

export const getAllCamsInRange = (
  state: RootState
): (({ rangeMin, rangeMax }: Pick<Cam, "rangeMin" | "rangeMax">) => Cam[]) =>
  getCamsInRange(
    Object.keys(state.entities.cams).map(id => state.entities.cams[id])
  );
