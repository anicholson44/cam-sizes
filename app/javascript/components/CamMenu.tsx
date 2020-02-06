import React from "react";
import { Segment, Accordion, List, Checkbox } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, CamStyle, EntitiesState } from "../store/types";
import { actions } from "../store";

const CamStyle = ({ name, id }: CamStyle) => {
    const dispatch = useDispatch();
    const onChange = () => dispatch(actions.selectCamStyle(id));
    const checked = useSelector<RootState, boolean>(({ selectedCamStyles }) => !!selectedCamStyles[id]);

    return <Checkbox label={name} onChange={onChange} checked={checked} />;
};

const ManufacturerMenuItem = ({ id }: { id: number }) => {
  const camStyles = useSelector<RootState, CamStyle[]>(({ entities }) =>
    entities.manufacturers[id].camStyles.map(id => entities.camStyles[id])
  );

  return (
    <List>
      {camStyles.map((camStyle) => (
        <List.Item key={camStyle.id}><CamStyle {...camStyle}/></List.Item>
      ))}
    </List>
  );
};

const CamMenu = () => {
  const entities: EntitiesState = useSelector<RootState, EntitiesState>(
    ({ entities }) => entities
  );

  const panels = Object.values(entities.manufacturers).map(({ name, id }) => ({
    key: `manufacturer-${id}`,
    title: name,
    content: {
      content: <ManufacturerMenuItem id={id} />
    }
  }));

  return (
    <Segment>
      <Accordion panels={panels} exclusive={false} />
    </Segment>
  );
};

export default CamMenu;
