import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navlink = ({icon, color, to}) => {
  return (
    <>
        <NavLink exact="true" activeclassname="active" to={to}>
            <FontAwesomeIcon icon={icon} color={color} />
        </NavLink>
    </>
  )
}

export default Navlink;