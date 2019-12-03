import React, { useState } from "react";
import "./SearchBar.css";

import { useSelector, useDispatch } from "react-redux";
import { setSearchText, setFilter } from "./../../state/actions.js";

function SearchBar(props) {
  const searchText = useSelector(state => state.searchText);
  const filterText = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="searchbar">
      <input
        placeholder="Enter text to search"
        value={searchText}
        onChange={e => dispatch(setSearchText(e.target.value))}
      />

      <img
        src={require("./../../assets/icons/search.svg")}
        onClick={() => dispatch(setSearchText(searchText))}
      />
      {/*<label for="filter">in: </label> */}
      <select
        name="filter"
        id="filter"
        onChange={e =>
          dispatch(setFilter({ id: e.target.value, value: e.target.text }))
        }
        value={filterText}
      >
        <option value="all">All</option>
        {props.cols.map(col => (
          <option value={`${col.id}`}>{col.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
