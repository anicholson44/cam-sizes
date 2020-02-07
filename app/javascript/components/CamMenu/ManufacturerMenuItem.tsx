import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Menu, List } from "semantic-ui-react";
import { RootState, CamStyle, EntityMap, Cam, IdStore } from "../../store";
import CamStyleCheckbox from "./CamStyleCheckbox";

const ManufacturerMenuItem = ({ id }: { id: number }) => {
  const camStyles = useSelector<RootState, CamStyle[]>(({ entities }) =>
    entities.manufacturers[id].camStyles.map(id => entities.camStyles[id])
  );
  const cams = useSelector<RootState, EntityMap<Cam>>(
    ({ entities }) => entities.cams
  );
  const [activeAccordions, setActiveAccordions] = useState<IdStore>({});

  return (
    <Accordion as={Menu} vertical>
      {camStyles.map(camStyle => {
        const active = activeAccordions[camStyle.id];
        return (
          <Menu.Item key={camStyle.id}>
            <Accordion.Title
              active={active}
              content={<CamStyleCheckbox {...camStyle} />}
              onClick={() => {
                const newActiveAccordions = { ...activeAccordions };
                if (active) {
                  delete newActiveAccordions[camStyle.id];
                } else {
                  newActiveAccordions[camStyle.id] = true;
                }
                setActiveAccordions(newActiveAccordions);
              }}
            />
            <Accordion.Content
              active={active}
              content={
                <List>
                  {camStyle.cams.map(id => (
                    <List.Item key={id}>{cams[id].name} {cams[id].color}</List.Item>
                  ))}
                </List>
              }
            />
          </Menu.Item>
        );
      })}
    </Accordion>
  );
};

export default ManufacturerMenuItem;
