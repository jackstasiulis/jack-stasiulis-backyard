import './MobileMenu.scss'
import { NavLink } from 'react-router-dom';

function MobileMenu ({toggleHam}) {

    return(
        <div className='mobileMenu'>
                <div className='mobileMenu__option--container'>

                    <NavLink to='/' className={({isActive}) => 
                            'mobileMenu__option' + (isActive || window.location.pathname === '/' ? ' active' : null)
                            }><button onClick={toggleHam} className='mobileMenu__option'>discover</button>
                    </NavLink>

                    <p onClick={toggleHam} className='mobileMenu__option'>artists</p>

                    <p onClick={toggleHam} className='mobileMenu__option'>venues</p>

                    <NavLink to='/addshows' className={({isActive}) => 
                        'mobileMenu__option' + (isActive || window.location.pathname === '/addshows' ? ' active' : null)
                        }><button onClick={toggleHam} className='mobileMenu__option'>+shows</button>
                    </NavLink>

                    <p onClick={toggleHam} className='mobileMenu__option'>profile</p>
                    <p onClick={toggleHam} className='mobileMenu__option modBold'>sign in</p>
                    <p onClick={toggleHam} className='mobileMenu__option'>about</p>
                </div>
            </div>
    )
}

export default MobileMenu;