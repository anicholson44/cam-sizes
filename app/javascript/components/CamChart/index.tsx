import React from "react";
import { useSelector } from "react-redux";

import { RootState, selectors } from "../../store";
import Chart from "./Chart";


const CamChart = () => {
  const cams = useSelector(selectors.getCams);
  const camStyles = useSelector(selectors.getCamStyles);
  const highlightedCams = useSelector(selectors.getHighlightedCams);
  const highlightedCamRange = useSelector(selectors.getHighlightedCamRange);
  const showDetailForCam = useSelector(selectors.getShowDetailForCam);
  const showDuplicatesInChart = useSelector<RootState, boolean>(
    ({ showDuplicatesInChart }) => showDuplicatesInChart
  );

  const selectedCams = useSelector(selectors.getSelectedCams);

  const camsToShow = Object.keys(selectedCams)
    .reduce((arr, id) => {
      for (let i = 0; i < selectedCams[id]; i++) {
        arr.push(cams[Number(id)]);
        if (!showDuplicatesInChart) {
          break;
        }
      }
      return arr;
    }, [])
    .sort((first, second) => {
      return (
        (first.rangeMax + first.rangeMin) / 2 -
        (second.rangeMax + second.rangeMin) / 2
      );
    });
  return (
    <Chart
      camStyles={camStyles}
      highlightedCams={highlightedCams}
      highlightedCamRange={highlightedCamRange}
      showDetailForCam={showDetailForCam}
      camsToShow={camsToShow}
    />
  );
};

export default CamChart;
