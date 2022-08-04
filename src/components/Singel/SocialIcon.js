import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({href,icon, color }) => {
  return (
    <li>
        <a href={href}>
            <FontAwesomeIcon icon={icon} color={color} />
        </a>
    </li>
  )
}

export default SocialIcon