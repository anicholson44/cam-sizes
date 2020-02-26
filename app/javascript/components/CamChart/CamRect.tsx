import React from "react";

import { containerParams } from ".";

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
  highlighted,
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
  highlighted?: boolean;
}) => (
  <>
    <rect
      fill={color}
      stroke={stroke}
      x={x}
      width={width}
      y={index * (height + padding)}
      height={height}
      opacity={blurred ? 0.3 : 1}
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
      style={{ cursor: "pointer" }}
    />
    <text
      x={x + width + 5}
      y={index * (height + padding) + 10}
      style={{ fontSize: 10 }}
    >
      {label}
    </text>
    {highlighted && (
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
      </>
    )}
  </>
);

export default CamRect;
