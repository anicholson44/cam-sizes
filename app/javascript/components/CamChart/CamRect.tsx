import React from "react";

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
  onMouseLeave
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
  </>
);

export default CamRect;
