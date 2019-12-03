import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

import DataGrid from "./components/DataGrid";
import SearchBar from "./components/SearchBar";
import ToastMessage from "./components/ToastMessage";
import data from "./data.js";

import { Provider } from "react-redux";
import store from "./state/store";

class App extends Component {
  render() {
    const cols = data.columnHeaders;
    return (
      <>
        <div className="app">
          <SearchBar cols={cols} />
          <DataGrid data={data} />
        </div>
        <ToastMessage />
      </>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
