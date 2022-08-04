import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

import Navlink from '../Singel/Navlink'
import SocialIcon from '../Singel/SocialIcon'

import { Navlinkdata, Socialicaondata } from '../dummyData';

const Sidebar = () => {
    const [menu, setMenu] = useState(false);
    const handelMenu = () => {
        setMenu(!menu)
    }

  return (
    <>
        {menu &&
            <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="logo" />
        </Link>

        <nav>
            {
                Navlinkdata?.map((item, index) => <Navlink key={index} {...item} />)
            }
        </nav>

        <ul>

        {
            Socialicaondata?.map((item, index) => <SocialIcon key={index} {...item} />)
        }
    
        </ul>


        </div>
        }

        <div className="menuIcon">
            <button onClick={handelMenu}>
                &#9776;
            </button>
        </div>
        <p className='author'>This is a demo project, create by <a href='mailto:mahadidev7@gmail.com' > mahadidev7</a></p>
    </>
  )
}

export default Sidebar;