import React from "react";

import { containerParams } from ".";

const rangeOffset = 40;
const rangeLabelStyle = { fontSize: 10, opacity: "50%" };

const CamRect = ({
  color,
  stroke,
  x,
  width,
  height,
  padding,
  index,
  label,
  blurred,
  onHover,
  onMouseLeave,
  highlightRange,
  rangeMin,
  rangeMax
}: {
  color: string;
  stroke: string;
  x: number;
  width: number;
  height: number;
  padding: number;
  index: number;
  label: string;
  blurred: boolean;
  onHover: () => unknown;
  onMouseLeave: () => unknown;
  highlightRange?: boolean;
  rangeMin: number;
  rangeMax: number;
}) => {
  const y = index * (height + padding);
  const textY = y + 11;
  const labelOffset = 5 + (highlightRange ? rangeOffset : 0);

  return (
    <>
      <rect
        fill={color}
        stroke={stroke}
        x={x}
        width={width}
        y={y}
        height={height}
        opacity={blurred ? 0.3 : 1}
        onMouseEnter={onHover}
        onMouseLeave={onMouseLeave}
        style={{ cursor: "pointer" }}
      />
      <text x={x + width + labelOffset} y={textY} style={{ fontSize: 10 }}>
        {label}
      </text>
      {highlightRange && (
        <>
          <line
            x1={x}
            x2={x}
            y1={containerParams.paddingY * -1}
            y2="100%"
            opacity="25%"
            stroke="black"
          />
          <line
            x1={x + width}
            x2={x + width}
            y1={containerParams.paddingY * -1}
            y2="100%"
            opacity="25%"
            stroke="black"
          />
          <text x={x - rangeOffset} y={textY} style={rangeLabelStyle}>
            {rangeMin}mm
          </text>
          <text x={x + width + 5} y={textY} style={rangeLabelStyle}>
            {rangeMax}mm
          </text>
        </>
      )}
    </>
  );
};

export default CamRect;
