import React from "react";
import "./Rows.css";

import Row from "./../Row";
import { useSelector } from "react-redux";

function Rows(props) {
  let rowData = props.rowData;
  const currentSortBy = useSelector(state => state.currentSortBy);
  const searchText = useSelector(state => state.searchText);
  const filterCol = useSelector(state => state.setFilter.id);

  rowData = sortRows(rowData, currentSortBy);
  rowData = filterRows(rowData, searchText, filterCol);
  const rows = rowData.map(row => <Row key={row.id} data={row} />);

  return <div className="rows">{rows}</div>;
}

const sortRows = (rows, currentSortBy) => {
  rows = rows.sort((a, b) => {
    a = a.data.find(obj => obj.id == currentSortBy.id);
    b = b.data.find(obj => obj.id == currentSortBy.id);
    if (!a) return 0;
    if (a.value < b.value) return currentSortBy.isIncreasing ? -1 : 1;
    if (a.value > b.value) return currentSortBy.isIncreasing ? 1 : -1;
  });

  return rows;
};

const filterRows = (rows, searchText, filterCol) => {
  if (searchText.length < 1) return rows;
  rows = rows.filter(row => {
    let data = row.data;
    return (
      data.filter(obj => {
        if (filterCol != "all" && obj.id !== filterCol) {
          return false;
        }
        if (obj.value.toUpperCase().includes(searchText.toUpperCase()))
          return true;
        else return false;
      }).length > 0
    );
  });
  return rows;
};
export default Rows;
