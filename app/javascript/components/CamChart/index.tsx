import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  RootState,
  EntityMap,
  CamStyle,
  selectors,
  IdStore,
  actions
} from "../../store";
import XAxisTick from "./XAxisTick";
import CamRect from "./CamRect";

const height = 770;
const width = 1200;
const paddingX = 0;
const paddingY = 20;

// suffix numbers to distinguish numbers that are in pixels from numbers in millimeters
const maxX_mm = 220;

const millimetersToPixels = width / maxX_mm;

const tickDistance_mm = 10;
const numXTicks = maxX_mm / tickDistance_mm;
const tickDistance_pixels = millimetersToPixels * tickDistance_mm;

const xTicks = Array.from({ length: numXTicks }, (_, i) => (
  <XAxisTick
    x={i * tickDistance_pixels}
    label={`${(i * tickDistance_mm) / 10}cm`}
    key={i}
  />
));

const CamChart = () => {
  const cams = useSelector(selectors.getCams);
  const selectedCams = Object.keys(useSelector(selectors.getSelectedCams)).map(
    id => cams[Number(id)]
  );
  selectedCams.sort((first, second) => {
    return (
      (first.rangeMax + first.rangeMin) / 2 -
      (second.rangeMax + second.rangeMin) / 2
    );
  });
  const camStyles = useSelector<RootState, EntityMap<CamStyle>>(
    ({ entities }) => entities.camStyles
  );
  const highlightedCams = useSelector<RootState, IdStore<true>>(
    ({ highlightedCams }) => highlightedCams
  );
  const highlightedCamRange = useSelector<RootState, number | void>(
    ({ highlightedCamRange }) => highlightedCamRange
  );
  const dispatch = useDispatch();

  const camRects = selectedCams.map(
    ({ id, color, rangeMin, rangeMax, name, camStyleId }, i) => (
      <>
        <CamRect
          key={i}
          color={color}
          stroke="black"
          x={millimetersToPixels * rangeMin}
          width={millimetersToPixels * (rangeMax - rangeMin)}
          height={15}
          padding={1}
          index={i}
          label={`${camStyles[camStyleId].name} ${name}`}
          onHover={() => dispatch(actions.highlightCamRange(id))}
          onMouseLeave={() => dispatch(actions.unhighlightCamRange())}
          blurred={
            Object.keys(highlightedCams).length > 0 && !highlightedCams[id]
          }
        />
        {highlightedCamRange === id && (
          <>
            <line
              x1={millimetersToPixels * rangeMin}
              x2={millimetersToPixels * rangeMin}
              y1={paddingY * -1}
              y2="100%"
              opacity="25%"
              stroke="black"
            />
            <line
              x1={millimetersToPixels * rangeMax}
              x2={millimetersToPixels * rangeMax}
              y1={paddingY * -1}
              y2="100%"
              opacity="25%"
              stroke="black"
            />
          </>
        )}
      </>
    )
  );

  return (
    <svg viewBox={`-${paddingX} -${paddingY} ${width} ${height}`}>
      <line x1={0} y1={0} x2={0} y2="100%" stroke="black" />
      <line x1={0} y1={0} y2={0} x2="100%" stroke="black" />
      {xTicks}
      <g transform="translate(0 20)">{camRects}</g>
    </svg>
  );
};

export default CamChart;
