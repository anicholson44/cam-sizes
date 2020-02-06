import React from "react";
import { Segment, Accordion } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { RootState, EntitiesState } from "../../store";
import ManufacturerMenuItem from "./ManufacturerMenuItem";

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
