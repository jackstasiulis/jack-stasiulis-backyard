import './Navbar.scss'
import LogoR from '../../assets/Backyard-logo-red.png';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar(props) {

    
// function to toggle our hamburger menu on and off
    const toggleHam = () => {
        const hamChange = document.querySelector('.hamburgermenu');
        hamChange.classList.toggle('active');
// once toggled, our mobile menu is activated
        const mobileMenu = document.querySelector('.mobileMenu');
        mobileMenu.classList.toggle('active');
    };

    return(
        <>
            {/* Our mobile menu component, visible when the toggleHam function is triggered */}
            <MobileMenu toggleHam={toggleHam} signedIn={props.signedIn} handleSignOut={props.handleSignOut} username={props.username} />
            
            {/* The mobile navbar */}
            <nav className='navbar'>
                <div className="hamburgermenu__container">
                    <div onClick={toggleHam} className='hamburgermenu'>
                        <div className='hambar barTop'></div>
                        <div className='hambar barMid'></div>
                        <div className='hambar barBot'></div>
                    </div>
                </div>

                {/* Our main navbar for the desktop screen size */}
                <div className='navbar__menu--wrapper'>
                    {/* Navbar LEFT SIDE */}
                    <div className='navbar__menu'>  
                        <NavLink to='/' className={({isActive}) => 
                            'navbar__menu__option' + (isActive || window.location.pathname === '/' ? '--active' : null)
                            }><button className='navbar__menu__option'>discover</button>
                        </NavLink>
                        
                        <NavLink to='/artists' className={({isActive}) => 
                            'navbar__menu__option' + (isActive || window.location.pathname === '/artists' ? '--active' : null)
                            }><button className='navbar__menu__option'>artists</button>
                        </NavLink>

                        <NavLink to='/venues' className={({isActive}) => 
                            'navbar__menu__option' + (isActive || window.location.pathname === '/venues' ? '--active' : null)
                            }><button className='navbar__menu__option'>venues</button>
                        </NavLink>
                        
                        {/* for addshows link - checks if user is signed in to access adding a show */}
                        {props.signedIn ? (
                            <NavLink to='/addshows' className={({isActive}) => 
                                'navbar__menu__option' + (isActive || window.location.pathname === '/addshows' ? '--active' : null)
                                }><button className='navbar__menu__option'>+shows</button>
                            </NavLink>
                        ) : (
                            <NavLink to='/signin' className={({isActive}) => 
                                'navbar__menu__option' + (isActive === '/signin' ? '--active' : null)
                                }><button className='navbar__menu__option'>+shows</button>
                            </NavLink>
                        )}
                    </div>

                    {/* Navbar RIGHT SIDE */}
                    <div className='navbar__menu'>

                        <NavLink to='/about' className={({isActive}) => 
                            'navbar__menu__option' + (isActive || window.location.pathname === '/about' ? '--active' : null)
                            }><button className='navbar__menu__option'>about</button>
                        </NavLink>
                        
                        <NavLink to='/profile' className={({isActive}) => 
                            'navbar__menu__option' + (isActive || window.location.pathname === '/profile' ? '--active' : null)
                            }><button className='navbar__menu__option'>profile</button>
                        </NavLink>

                        <button className='navbar__menu__option modHide'>hidden</button>

                        {/* for sign in link */}
                        {props.signedIn ? (
                            <NavLink to='/' className={({isActive}) => 
                                'navbar__menu__option' + (isActive === '/signin' ? '--active' : null)
                                }><button className='navbar__menu__option' 
                            onClick={() => {
                                props.handleSignOut();
                              }} >sign|out</button>
                            </NavLink>
                        ):(
                            <NavLink to='/signin' className={({isActive}) => 
                                'navbar__menu__option' + (isActive || window.location.pathname === '/signin' ? '--active' : null)
                                }><button className='navbar__menu__option'>sign|in</button>
                            </NavLink>
                        )}
                        {props.signedIn ? (
                            <p className='navbar__menu--username'>{props.username}</p>
                        ) : null}
                        
                    </div>
                </div>
                
                <a className='navbar__logo' href="/">
                    <img className='navbar__logo' src={LogoR} alt="" />
                </a>
                    
            </nav>
        </>
    )
}

export default Navbar;