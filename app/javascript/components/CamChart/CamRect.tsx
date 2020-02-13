import React from "react";

const height = 15;
const padding = 1;

const CamRect = ({
  color,
  stroke,
  x,
  width,
  index,
  label,
  blurred
}: {
  color: string;
  stroke: string;
  x: number;
  width: number;
  index: number;
  label: string;
  blurred: boolean;
}) => (
  <>
    <rect
      fill={color}
      stroke={stroke}
      x={x}
      width={width}
      y={index * (height + padding)}
      height={height}
      opacity={blurred ? .3 : 1}
    />
    <text
      x={x + width + 5}
      y={index * (height + padding) + 10}
      style={{ fontSize: 10 }}
    >
      {label}
    </text>
  </>
);

export default CamRect;
