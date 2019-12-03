import React from "react";
import "./Header.css";

import HeaderColumn from "./../HeaderColumn";

function Header(props) {
  const columnHeaders = props.columnHeaders;
  const widthPercent = 100 / props.columnHeaders.length;

  const headerColumns = columnHeaders.map(column => (
    <HeaderColumn data={column} widthPercent={widthPercent} />
  ));

  return <div className="header">{headerColumns}</div>;
}

export default Header;
