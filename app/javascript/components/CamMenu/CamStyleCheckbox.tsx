import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "semantic-ui-react";
import { actions, RootState, CamStyle } from "../../store";

const CamStyleCheckbox = ({ name, id }: CamStyle) => {
    const dispatch = useDispatch();
    const checked = useSelector<RootState, boolean>(({ selectedCamStyles }) => !!selectedCamStyles[id]);

    const onChange = () => dispatch(checked ? actions.deselectCamStyle(id) : actions.selectCamStyle(id));
    return <Checkbox label={name} onChange={onChange} checked={checked} />;
};

export default CamStyleCheckbox;
