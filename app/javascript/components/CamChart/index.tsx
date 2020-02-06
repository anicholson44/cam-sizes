import React from "react";
import { useSelector } from "react-redux";
import { RootState, Cam } from "../../store";
import XAxisTick from "./XAxisTick";

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

const xTicks = Array.from({ length: numXTicks }, (_, i) => <XAxisTick x={i * tickDistance_pixels} label={`${i * tickDistance_mm}mm`}/>);

const CamChart = () => {
    const selectedCams = useSelector<RootState, Cam[]>(({ selectedCamStyles, entities }) => 
        Object.keys(selectedCamStyles).map((id) => entities.cams[id])
    );
    
    return (
        <svg viewBox={`-${paddingX} -${paddingY} ${width} ${height}`}>
            {xTicks}
            <line x1={0} y1={0} x2={0} y2="100%" stroke="black" />
            <line x1={0} y1={0} y2={0} x2="100%" stroke="black" />
        </svg>
    )
};

export default CamChart;
