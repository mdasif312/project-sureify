import React from "react";
import "./RowColumn.css";
import { useSelector } from "react-redux";

function RowColumn(props) {
  let value = props.value;
  const searchText = useSelector(state => state.searchText);
  const widthPercent = props.widthPercent;
  const filterCol = useSelector(state => state.setFilter.id);

  if (
    searchText.length >= 1 &&
    (filterCol == "all" || (filterCol != "all" && filterCol == props.id))
  ) {
    value = value.replace(
      new RegExp(searchText, "gi"),
      match => `<mark>${match}</mark>`
    );
  }
  return (
    <div
      className="row-column"
      style={{ width: `${widthPercent}%` }}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}

export default RowColumn;
