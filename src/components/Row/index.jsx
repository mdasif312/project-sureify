import React from "react";
import "./Row.css";
import RowColumn from "./../RowColumn";

function Row(props) {
  const data = props.data;
  const widthPercent = 100 / props.data.data.length;
  const rowColumns = data.data.map(rowColumn => (
    <RowColumn id={rowColumn.id} value={rowColumn.value} widthPercent={widthPercent} />
  ));
  return (
    <div className="row" key={props.key}>
      {rowColumns}
    </div>
  );
}

export default Row;
