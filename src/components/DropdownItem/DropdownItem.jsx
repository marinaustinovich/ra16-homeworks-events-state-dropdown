import React from 'react'
import PropTypes from 'prop-types'

function DropdownItem(props) {
    const { item, selectItem } = props
    return (
        <li className={`${item.selected === true ? 'active' : ''}`} onClick={selectItem}>
            { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
            <a href="#">{item.title}</a>
        </li>
    )
}

DropdownItem.propTypes = {
    item: PropTypes.shape({
            title: PropTypes.string.isRequired,
            selected: PropTypes.bool.isRequired,
    }).isRequired,
    selectItem: PropTypes.func.isRequired,
}

export default DropdownItem
