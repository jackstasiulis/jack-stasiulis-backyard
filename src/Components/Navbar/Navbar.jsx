import './Navbar.scss'
import LogoR from '../../assets/Backyard-logo-red.png';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {

    const toggleHam = () => {
        const hamChange = document.querySelector('.hamburgermenu');
        hamChange.classList.toggle('active');

        const mobileMenu = document.querySelector('.mobileMenu');
        mobileMenu.classList.toggle('active');
    };

    return(
        <body>
            
            <MobileMenu />

            <nav className='navbar'>
                <div className="hamburgermenu__container">
                    <div onClick={toggleHam} className='hamburgermenu'>
                        <div className='hambar barTop'></div>
                        <div className='hambar barMid'></div>
                        <div className='hambar barBot'></div>
                    </div>
                </div>
                <img className='navbar__logo' src={LogoR} alt="" />
            </nav>
        </body>
    )
}

export default Navbar;