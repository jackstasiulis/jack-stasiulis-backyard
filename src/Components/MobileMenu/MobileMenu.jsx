import './MobileMenu.scss'
import { NavLink } from 'react-router-dom';

function MobileMenu ({toggleHam, signedIn, handleSignOut, username}) {

    return(
        <div className='mobileMenu'>
                <div className='mobileMenu__option--container'>

                    <NavLink to='/' className={({isActive}) => 
                            'mobileMenu__option' + (isActive || window.location.pathname === '/' ? ' active' : null)
                            }><button onClick={toggleHam} className='mobileMenu__option'>discover</button>
                    </NavLink>

                    <NavLink to='/artists' className={({isActive}) => 
                        'mobileMenu__option' + (isActive || window.location.pathname === '/artists' ? ' active' : null)
                        }><p onClick={toggleHam} className='mobileMenu__option'>artists</p>
                    </NavLink>

                    <NavLink to='/venues' className={({isActive}) => 
                        'mobileMenu__option' + (isActive || window.location.pathname === '/venues' ? ' active' : null)
                        }><p onClick={toggleHam} className='mobileMenu__option'>venues</p>
                    </NavLink>


                    {/* for MOBILE addshows link */}
                    {signedIn ? (
                            <NavLink to='/addshows' className={({isActive}) => 
                                'mobileMenu__option' + (isActive || window.location.pathname === '/addshows' ? ' active' : null)
                                }><button onClick={toggleHam} className='mobileMenu__option'>+shows</button>
                            </NavLink>
                        ) : (
                            <NavLink to='/signin' className={({isActive}) => 
                                'mobileMenu__option' + (isActive === '/signin' ? ' active' : null)
                                }><button onClick={toggleHam} className='mobileMenu__option'>+shows</button>
                            </NavLink>
                        )}

                    <NavLink to='/profile' className={({isActive}) => 
                        'mobileMenu__option' + (isActive || window.location.pathname === '/profile' ? ' active' : null)
                        }><p onClick={toggleHam} className='mobileMenu__option'>profile</p>
                    </NavLink>  


                    {/* for MOBILE sign in link */}
                    {signedIn ? (
                            <NavLink to='/' className={({isActive}) => 
                                'mobileMenu__option' + (isActive === '/signin' ? '--active' : null)
                                }><button  className='mobileMenu__option' 
                            onClick={() => {
                                handleSignOut();
                                toggleHam();
                              }} >sign|out</button>
                            </NavLink>
                        ):(
                            <NavLink to='/signin' className={({isActive}) => 
                                'mobileMenu__option' + (isActive || window.location.pathname === '/signin' ? '--active' : null)
                                }><button onClick={toggleHam} className='mobileMenu__option'>sign|in</button>
                            </NavLink>
                        )}
                        {signedIn ? (
                            <p className='mobileMenu__username'>{username}</p>
                        ) : null}

                    <NavLink to='/about' className={({isActive}) => 
                        'mobileMenu__option' + (isActive || window.location.pathname === '/about' ? ' active' : null)
                        }><p onClick={toggleHam} className='mobileMenu__option'>about</p>
                    </NavLink>  



                </div>
                
            </div>
    )
}

export default MobileMenu;