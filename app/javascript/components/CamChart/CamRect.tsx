import React from "react";

const widthOfLabel = (label: string) => {
  const length = label.replace(".", "").length;
  const hasDecimal = label.includes(".");
  return 8 * length + (hasDecimal ? 5 : 0);
};

const rangeLabelStyle = { fontSize: 10, opacity: "50%" };

const CamRect = ({
  onClick,
  color,
  stroke,
  x,
  y,
  width,
  height,
  label,
  blurred,
  onHover,
  onMouseLeave,
  showRange,
  rangeMin,
  rangeMax,
  strength,
  showStrength
}: {
  onClick: () => unknown;
  color: string;
  stroke: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  blurred: boolean;
  onHover: () => unknown;
  onMouseLeave: () => unknown;
  showRange?: boolean;
  rangeMin: number;
  rangeMax: number;
  strength: number;
  showStrength: boolean;
}) => {
  const textY = y + height / 2 + 4;
  const labelOffset = 5 + (showRange ? widthOfLabel(rangeMax + "mm") : 0);

  return (
    <g
      style={{ cursor: "pointer" }}
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <rect
        fill={color}
        stroke={stroke}
        x={x}
        width={width}
        y={y}
        height={height}
        opacity={blurred ? 0.3 : 1}
      />
      <text x={x + width + labelOffset} y={textY} style={{ fontSize: 10 }}>
        {label}
      </text>
      {showRange ? (
        <>
          <text
            x={x - widthOfLabel(rangeMin + "mm")}
            y={textY}
            style={rangeLabelStyle}
          >
            {rangeMin}mm
          </text>
          <text x={x + width + 5} y={textY} style={rangeLabelStyle}>
            {rangeMax}mm
          </text>
        </>
      ) : (
        showStrength && (
          <text
            x={x - widthOfLabel(strength + "kN")}
            y={textY}
            style={rangeLabelStyle}
          >
            {strength}kN
          </text>
        )
      )}
    </g>
  );
};

export default CamRect;
