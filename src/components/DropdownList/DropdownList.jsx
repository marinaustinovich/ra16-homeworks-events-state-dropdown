import React, { useState  } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

function DropdownList(props) { 
    const items = [
        { title: 'Profile Information', selected: false }, 
        { title: 'Change Passward', selected: false }, 
        { title: 'Become PRO' , selected: false }, 
        { title: 'Help', selected: false }, 
        { title: 'Log Out', selected: false }
    ];
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);


    const selectItem  = (index) => {
        setSelectedItemIndex(index); 
    }
    return (
        <div className="dropdown-wrapper open">
            <ul className="dropdown">
                {items.map((item, index) => 
                    <DropdownItem 
                        key={index} 
                        item={{...item, selected: index === selectedItemIndex}} 
                        selectItem={() => selectItem(index)} 
                    />
                )}
            </ul>
        </div>
    )
}

DropdownList.propTypes = {}

export default DropdownList
