import React from "react";
import { useState } from "react";
import DropdownList from "../DropdownList/DropdownList";

import "./dropdown.css";

const items = [
  { title: "Profile Information", selected: false },
  { title: "Change Password", selected: false },
  { title: "Become PRO", selected: false },
  { title: "Help", selected: false },
  { title: "Log Out", selected: false },
];

function Dropdown() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="container">
      <button
        className="btn material-icons"
        onClick={() => setIsOpened(!isOpened)}
      >
        Account settings
      </button>
      {isOpened && <DropdownList items={items} />}
    </div>
  );
}

export default Dropdown;
