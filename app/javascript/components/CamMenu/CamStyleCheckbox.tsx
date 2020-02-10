import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { actions, RootState, CamStyle } from "../../store";

const CamStyleCheckbox = ({ id }: CamStyle) => {
  const dispatch = useDispatch();
  const checked = useSelector<RootState, boolean>(
    ({ selectedCamStyles }) => !!selectedCamStyles[id]
  );

  const onClick = () =>
    dispatch(
      checked ? actions.deselectCamStyle(id) : actions.selectCamStyle(id)
    );
  return (
    <Icon
      onClick={onClick}
      name={checked ? "minus" : "plus"}
      style={{
        float: "left",
        margin: "0 1em 0 0"
      }}
    />
  );
};

export default CamStyleCheckbox;
