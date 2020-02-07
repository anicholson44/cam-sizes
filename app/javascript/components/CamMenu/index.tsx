import React from "react";
import { Segment, List, Header } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { RootState, EntitiesState } from "../../store";
import ManufacturerMenuItem from "./ManufacturerMenuItem";

const CamMenu = () => {
  const entities: EntitiesState = useSelector<RootState, EntitiesState>(
    ({ entities }) => entities
  );

  return (
    <List>
      {Object.values(entities.manufacturers).map(({ name, id }) => (
        <List.Item key={id}>
          <Header as="h3">{name}</Header>
          <ManufacturerMenuItem id={id} />
        </List.Item>
      ))}
    </List>
  );
};

export default CamMenu;
