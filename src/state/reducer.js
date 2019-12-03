import React from "react";
import { combineReducers } from "redux";
import CONSTANTS from "./constants.js";

function searchTextReducer(searchText = "", action) {
  switch (action.type) {
    case CONSTANTS.SET_TEXT:
      return action.payload;
    default:
      return searchText;
  }
}

function currentSortByReducer(
  currentSortBy = {
    id: "firstName",
    isIncreasing: true
  },
  action
) {
  switch (action.type) {
    case CONSTANTS.TOGGLE_DIRECTION:
      return {
        ...currentSortBy,
        isIncreasing: !currentSortBy.isIncreasing
      };
    case CONSTANTS.SET_SORTBY:
      return {
        id: action.payload,
        isIncreasing: true
      };
    default:
      return currentSortBy;
  }
}

function showMessageReducer(message = "", action) {
  switch (action.type) {
    case CONSTANTS.SHOW_MESSAGE:
      return action.payload;
    default:
      return message;
  }
}

function setFilterReducer(filter = {
  id: "all",
  value:"All"
}, action) {
  switch (action.type) {
    case CONSTANTS.SET_FILTER:
      return action.payload;
    default:
      return filter;
  }
}

export default combineReducers({
  searchText: searchTextReducer,
  currentSortBy: currentSortByReducer,
  showMessage: showMessageReducer,
  setFilter: setFilterReducer
});
