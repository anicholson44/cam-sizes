import React from "react";

const height = 15;

const CamRect = ({ color, stroke, x, width, index }: {color: string, stroke: string, x: number, width: number, index: number }) => (
    <rect fill={color} stroke={stroke} x={x} width={width} y={index * height} height={height} />
);

export default CamRect;
