import { createAsyncAction, createAction } from "typesafe-actions";

import { EntitiesState } from "./types";

const fetchCamsAsync = createAsyncAction(
  "FETCH_CAMS_REQUEST",
  "FETCH_CAMS_SUCCESS",
  "FETCH_CAMS_FAILURE"
)<void, [EntitiesState, { camelize: true }], Error>();

const selectCamStyle = createAction("SELECT_CAM_STYLE")<number>();
const deselectCamStyle = createAction("DESELECT_CAM_STYLE")<number>();

const selectCam = createAction("SELECT_CAM")<number>();
const deselectCam = createAction("DESELECT_CAM")<number>();

const highlightCamStyle = createAction("HIGHLIGHT_CAM_STYLE")<number>();
const highlightCam = createAction("HIGHLIGHT_CAM")<number>();
const unhighlightCams = createAction("UNHIGHLIGHT_CAMS")<void>();

const highlightCamRange = createAction("HIGHLIGHT_CAM_RANGE")<number>();
const unhighlightCamRange = createAction("UNHIGHLIGHT_CAM_RANGE")<void>();

export default {
  fetchCamsAsync,
  selectCamStyle,
  deselectCamStyle,
  selectCam,
  deselectCam,
  highlightCamStyle,
  highlightCam,
  unhighlightCams,
  highlightCamRange,
  unhighlightCamRange
};
