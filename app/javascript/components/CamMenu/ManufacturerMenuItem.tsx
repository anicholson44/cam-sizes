import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Menu, Icon } from "semantic-ui-react";
import {
  RootState,
  CamStyle,
  EntityMap,
  Cam,
  IdStore,
  SelectedCamStyles
} from "../../store";
import CamStyleCheckbox from "./CamStyleCheckbox";
import CamMenuItem from "./CamMenuItem";

const ManufacturerMenuItem = ({ id }: { id: number }) => {
  const camStyles = useSelector<RootState, CamStyle[]>(({ entities }) =>
    entities.manufacturers[id].camStyles.map(id => entities.camStyles[id])
  );
  const cams = useSelector<RootState, EntityMap<Cam>>(
    ({ entities }) => entities.cams
  );
  const selectedCamStyles = useSelector<RootState, SelectedCamStyles>(
    ({ selectedCamStyles }) => selectedCamStyles
  );
  const [activeAccordions, setActiveAccordions] = useState<IdStore<true>>({});

  return (
    <Accordion as={Menu} vertical>
      {camStyles.map(camStyle => {
        const active = activeAccordions[camStyle.id];
        return (
          <Menu.Item key={camStyle.id}>
            <CamStyleCheckbox {...camStyle} /> 
            <Accordion.Title
              active={active}
              content={camStyle.name}
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
                <div className="cam-list">
                  {camStyle.cams.map(id => (
                    <CamMenuItem
                      key={id}
                      {...cams[id]}
                      selected={
                        selectedCamStyles[camStyle.id] &&
                        !!selectedCamStyles[camStyle.id][id]
                      }
                    />
                  ))}
                </div>
              }
            />
          </Menu.Item>
        );
      })}
    </Accordion>
  );
};

export default ManufacturerMenuItem;
