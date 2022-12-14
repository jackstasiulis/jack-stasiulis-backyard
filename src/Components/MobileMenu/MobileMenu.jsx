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

                    <p onClick={toggleHam} className='mobileMenu__option'>artists</p>

                    <p onClick={toggleHam} className='mobileMenu__option'>venues</p>

                    {/* for MOBILE addshows link */}
                    {signedIn ? (
                            <NavLink to='/addshows' className={({isActive}) => 
                                'mobileMenu__option' + (isActive || window.location.pathname === '/addshows' ? '--active' : null)
                                }><button onClick={toggleHam} className='mobileMenu__option'>+shows</button>
                            </NavLink>
                        ) : (
                            <NavLink to='/signin' className={({isActive}) => 
                                'mobileMenu__option' + (isActive === '/signin' ? '--active' : null)
                                }><button onClick={toggleHam} className='mobileMenu__option'>+shows</button>
                            </NavLink>
                        )}

                    <p onClick={toggleHam} className='mobileMenu__option'>profile</p>



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

                    <p onClick={toggleHam} className='mobileMenu__option'>about</p>
                </div>
                
            </div>
    )
}

export default MobileMenu;