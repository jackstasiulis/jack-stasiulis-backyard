import './Navbar.scss'
import LogoR from '../../assets/Backyard-logo-red.png';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {

    // const activePage = window.location.pathname;
    // // console.log(activePage)
    // const navLinks = document.querySelectorAll('button')

    // navLinks.forEach(link => {
    //     if(link.href.includes(`${activePage}`)){
    //         console.log(`${activePage}`)
    //     }
    //     console.log()
    // });

    // forEach(link => {
    //     console.log(link.href)
    // })

    const myNav = useNavigate();

    const addshows = (e) => {
        // const addshowsActive = document.querySelector('.+shows');
        // addshowsActive.classList.toggle('active');


        myNav('/addshows')
    }

    const discover = (e) => {
        myNav('/')
    }

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



                <div className='navbar__menu--wrapper'>
                    <div className='navbar__menu'>  
                        <NavLink to='/' className={({isActive}) => 
                            'navbar__menu__option' + (isActive || window.location.pathname === '/' ? '--active' : null)
                            }><button className='navbar__menu__option'>discover</button>
                        </NavLink>
                        <button className='navbar__menu__option'>artists</button>
                        <button className='navbar__menu__option'>venues</button>
                        <NavLink to='/addshows' className={({isActive}) => 
                            'navbar__menu__option' + (isActive || window.location.pathname === '/addshows' ? '--active' : null)
                        }><button className='navbar__menu__option'>+shows</button>
                        </NavLink>



                    </div>
                                    
                    <div className='navbar__menu'>
                        <button className='navbar__menu__option'>about</button>
                        <button className='navbar__menu__option'>profile</button>
                        <button className='navbar__menu__option modBold'>sign|in</button>
                        <button className='navbar__menu__option modHide'>hidden</button>
                    </div>
                </div>

                <img className='navbar__logo' src={LogoR} alt="" />

            </nav>





        </body>
    )
}

export default Navbar;