import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, selectors, actions } from "../../store";
import XAxisTick from "./XAxisTick";
import CamRect from "./CamRect";
import CamDetail from "./CamDetail";

const shadowId = "shadow";
const height = 5000;
const width = 1200;
const paddingX = 0;
const paddingY = 80;

// suffix numbers to distinguish numbers that are in pixels from numbers in millimeters
const maxX_mm = 220;

const millimetersToPixels = width / maxX_mm;

const tickDistance_mm = 10;
const numXTicks = maxX_mm / tickDistance_mm;
const tickDistance_pixels = millimetersToPixels * tickDistance_mm;

const maxY_kn = 1875;
const kilonewtonsToPixels = height / maxY_kn;

const maxY_g = 10000;
const gramsToPixels = height / maxY_g;

export const containerParams = {
  height,
  width,
  paddingX,
  paddingY,
  maxX_mm,
  millimetersToPixels,
  tickDistance_mm,
  numXTicks,
  tickDistance_pixels,
  shadowId
};

const xTicks = Array.from({ length: numXTicks }, (_, i) => (
  <XAxisTick
    x={i * tickDistance_pixels}
    label={`${(i * tickDistance_mm) / 10}cm`}
    key={i}
  />
));

const CamChart = () => {
  const cams = useSelector(selectors.getCams);
  const camStyles = useSelector(selectors.getCamStyles);
  const highlightedCams = useSelector(selectors.getHighlightedCams);
  const highlightedCamRange = useSelector(selectors.getHighlightedCamRange);
  const showDetailForCam = useSelector(selectors.getShowDetailForCam);
  const showDuplicatesInChart = useSelector<RootState, boolean>(
    ({ showDuplicatesInChart }) => showDuplicatesInChart
  );

  const dispatch = useDispatch();

  let camRangeHighlight = null;
  let camDetail = null;
  const camRects = useSelector<RootState>(state => {
    const selectedCams = selectors.getSelectedCams(state);
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
    let y = 0;
    return camsToShow.map((cam, i) => {
      const { id, color, rangeMin, rangeMax, name, camStyleId, strength } = cam;
      const x = millimetersToPixels * rangeMin;
      const rectWidth = millimetersToPixels * (rangeMax - rangeMin);
      const thisY = y;
      const height = strength * kilonewtonsToPixels;
      y += height + 1;
      if (highlightedCamRange === id) {
        camRangeHighlight = (
          <>
            <line
              x1={x}
              x2={x}
              y1={paddingY * -1}
              y2="100%"
              opacity="25%"
              stroke="black"
            />
            <line
              x1={x + rectWidth}
              x2={x + rectWidth}
              y1={paddingY * -1}
              y2="100%"
              opacity="25%"
              stroke="black"
            />
          </>
        );
      }
      if (showDetailForCam === id) {
        const position = x > width / 2 ? "left" : "right";
        camDetail = (
          <CamDetail
            id={id}
            x={position === "right" ? x + rectWidth : x}
            y={thisY + height / 2}
            position={position}
          />
        );
      }
      return (
        <CamRect
          key={i}
          onClick={() =>
            dispatch(
              showDetailForCam === id
                ? actions.hideCamDetail()
                : actions.showDetailForCam(id)
            )
          }
          color={color}
          stroke="black"
          x={x}
          y={thisY}
          width={rectWidth}
          height={height}
          label={`${camStyles[camStyleId].name} ${name}`}
          onHover={() => dispatch(actions.highlightCamRange(id))}
          onMouseLeave={() => dispatch(actions.unhighlightCamRange())}
          blurred={
            Object.keys(highlightedCams).length > 0 && !highlightedCams[id]
          }
          showRange={!!highlightedCamRange}
          rangeMin={rangeMin}
          rangeMax={rangeMax}
          strength={strength}
          showStrength={!highlightedCamRange}
        />
      );
    });
  });

  return (
    <svg viewBox={`-${paddingX} -${paddingY} ${width} ${height}`}>
      <defs>
        <filter id={shadowId}>
          <feDropShadow
            dx="-1"
            dy="-1"
            stdDeviation="2"
            floodOpacity=".3"
          ></feDropShadow>
        </filter>
      </defs>
      <rect
        x={0}
        y={0}
        height="100%"
        width="100%"
        strokeWidth="0"
        onClick={() => dispatch(actions.hideCamDetail())}
        fillOpacity={0}
      ></rect>
      <line x1={0} y1={0} x2={0} y2="100%" stroke="black" />
      <line x1={0} y1={0} y2={0} x2="100%" stroke="black" />
      <text
        x={width / 2 - 50}
        y={(paddingY * -1) / 2}
        style={{ fontSize: 16 }}
      >
        Expansion Range
      </text>
      {xTicks}
      <g transform="translate(0 20)">
        {camRects}
        {camRangeHighlight}
        {camDetail}
      </g>
    </svg>
  );
};

export default CamChart;
