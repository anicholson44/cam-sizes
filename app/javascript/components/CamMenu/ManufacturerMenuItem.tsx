import React from "react";
import { useSelector } from "react-redux";
import { List } from "semantic-ui-react";
import { RootState, CamStyle } from "../../store";
import CamStyleCheckbox from "./CamStyleCheckbox";

const ManufacturerMenuItem = ({ id }: { id: number }) => {
  const camStyles = useSelector<RootState, CamStyle[]>(({ entities }) =>
    entities.manufacturers[id].camStyles.map(id => entities.camStyles[id])
  );

  return (
    <List>
      {camStyles.map((camStyle) => (
        <List.Item key={camStyle.id}><CamStyleCheckbox {...camStyle}/></List.Item>
      ))}
    </List>
  );
};

export default ManufacturerMenuItem;
