import React, { useState } from "react";
import PropTypes from 'prop-types';
import DropdownItem from "../DropdownItem/DropdownItem";

import "./dropdown-list.css";

const DropdownList = ({ items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const selectItem = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <div className="dropdown-wrapper open">
      <ul className="dropdown">
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            item={{ ...item, selected: index === selectedItemIndex }}
            selectItem={() => selectItem(index)}
          />
        ))}
      </ul>
    </div>
  );
};

DropdownList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownList;
