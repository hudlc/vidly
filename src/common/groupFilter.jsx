import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const GroupFilter = (props) => {
  const { genreList, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;
  return (
    <ListGroup>
      {genreList.map((genre) => (
        <ListGroup.Item
          className={genre === selectedItem ? "active" : null}
          key={genre[valueProperty]}
          action
          onClick={() => onItemSelect(genre)}
        >
          {genre[textProperty]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

GroupFilter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default GroupFilter;
