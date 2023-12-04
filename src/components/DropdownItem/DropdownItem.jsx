import React from "react";
import PropTypes from "prop-types";

import "./dropdown-item.css";

const DropdownItem = ({ item, selectItem }) => (
  <li
    className={`${item.selected === true ? "active" : ""}`}
    onClick={selectItem}
  >
    <a href="#">{item.title}</a>
  </li>
);

DropdownItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  selectItem: PropTypes.func.isRequired,
};

export default DropdownItem;
