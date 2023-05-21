import React from 'react';
import { useState  } from 'react';
import DropdownList from '../DropdownList/DropdownList';

function Dropdown(props) {
    const [isOpened, setIsOpened] = useState(false);
    const toggleDropdown  = () => {
        setIsOpened(!isOpened);
    }
    return (
        <div className="container">
            <button className="btn material-icons" onClick={toggleDropdown}>
                Account settings
            </button>
            {isOpened && <DropdownList />}
        </div>
    )
}

Dropdown.propTypes = {}

export default Dropdown
