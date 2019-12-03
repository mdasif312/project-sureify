import React from "react";
import "./HeaderColumn.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setSortBy,
  toggleDirection,
  showMessage
} from "./../../state/actions.js";

function HeaderColumn(props) {
  const data = props.data;
  const widthPercent = props.widthPercent;
  const sortByInfo = useSelector(state => state.currentSortBy);
  const dispatch = useDispatch();
  const setSort = id => {
    if (data.sortable == "false") {
      dispatch(
        showMessage(
          `Cannot sort by ${data.label}` +
            Math.floor(Math.random() * 1000000000)
        )
      );
      return;
    }
    if (sortByInfo.id == id) dispatch(toggleDirection());
    else {
      dispatch(setSortBy(id, true));
    }
  };

  return (
    <div
      className="header-column"
      style={{
        width: `${widthPercent}%`,
        background: sortByInfo.id == data.id ? "#000" : ""
      }}
      onClick={() => setSort(data.id)}
    >
      <div>{data.label}</div>
      <div className="sort-controls">
        {sortByInfo.id != data.id ? null : sortByInfo.isIncreasing ? (
          <img src={require("./../../assets/icons/sort-down.svg")} />
        ) : (
          <img src={require("./../../assets/icons/sort-up.svg")} />
        )}
      </div>
    </div>
  );
}

export default HeaderColumn;
