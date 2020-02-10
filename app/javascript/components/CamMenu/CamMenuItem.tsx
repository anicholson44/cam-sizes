import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import { actions } from "../../store";

const CamMenuItem = ({
  id,
  name,
  color,
  selected
}: {
  id: number;
  name: string;
  color: string;
  selected: boolean;
}) => {
  const dispatch = useDispatch();
  const onClick = () =>
    dispatch(selected ? actions.deselectCam(id) : actions.selectCam(id));

  return (
    <div className="cam-menu-item">
      <Icon name={selected ? "minus" : "plus"} onClick={onClick} />
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
