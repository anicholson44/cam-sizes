import React from "react";
import { useSelector } from "react-redux";
import { Header, Segment, List } from "semantic-ui-react";
import { selectors } from "../../store";

const Rack = () => {
  const selectedCams = useSelector(selectors.getSelectedCams);
  const weight = selectedCams.reduce((w, cam) => w + cam.weight, 0);
  const camStyles = useSelector(selectors.getCamStyles);

  return (
    <>
      <Header as="h3">My Rack</Header>
      <Segment id="rack">
        <List>
          <List.Item>
            <List.Header>Total Weight:</List.Header>
          </List.Item>
          <List.Item>{weight}g</List.Item>
        </List>
        <List>
          <List.Item>
            <List.Header>Cams</List.Header>
          </List.Item>
          {selectedCams.map(({ name, camStyleId, id, color }) => (
            <List.Item key={id}>
              <div className="cam-name-and-color">
                <div
                  style={{ backgroundColor: color }}
                  className="cam-color-preview"
                ></div>
                <span>
                  {name} {camStyles[camStyleId].name}
                </span>
              </div>
            </List.Item>
          ))}
        </List>
      </Segment>
    </>
  );
};

export default Rack;
