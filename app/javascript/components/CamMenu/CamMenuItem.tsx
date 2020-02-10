import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import { RootState } from "../../store";

const CamMenuItem = ({
  id,
  name,
  color
}: {
  id: number;
  name: string;
  color: string;
}) => {
  const selected = useSelector<RootState, boolean>(
    ({ selectedCams }) => !!selectedCams[id]
  );
  return (
    <div className="cam-menu-item">
      <Icon name={selected ? "minus" : "plus"} />
      <div className="cam-name-and-color">
        <span>{name}</span>
        <div
          style={{ backgroundColor: color }}
          className="cam-color-preview"
        ></div>
      </div>
    </div>
  );
};

export default CamMenuItem;
