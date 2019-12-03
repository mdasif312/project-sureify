import CONSTANTS from "./constants.js";

export function setSearchText(text) {
  return {
    type: CONSTANTS.SET_TEXT,
    payload: text
  };
}

export function setSortBy(id) {
  return {
    type: CONSTANTS.SET_SORTBY,
    payload: id
  };
}

export function toggleDirection() {
  return {
    type: CONSTANTS.TOGGLE_DIRECTION
  };
}

export function showMessage(message) {
  
  return {
    type: CONSTANTS.SHOW_MESSAGE,
    payload: message
  };
}


export function setFilter(filter){
  return {
    type: CONSTANTS.SET_FILTER,
    payload: filter
  }
}