import './MobileMenu.scss'
import { NavLink } from 'react-router-dom';

function MobileMenu () {

    return(
        <div className='mobileMenu'>
                <div className='mobileMenu__option--container'>


                    {/* <Link to={discover}><p className='mobileMenu__option active'>discover</p></Link> */}

                    <NavLink to='/' className={({isActive}) => 
                            'mobileMenu__option' + (isActive || window.location.pathname === '/' ? '--active' : null)
                            }><button className='mobileMenu__option'>discover</button>
                        </NavLink>


                    <p className='mobileMenu__option'>artists</p>
                    <p className='mobileMenu__option'>venues</p>
                    <p className='mobileMenu__option'>shows</p>
                    <p className='mobileMenu__option'>profile</p>
                    <p className='mobileMenu__option modBold'>sign in</p>
                    <p className='mobileMenu__option'>about</p>
                </div>
            </div>
    )
}

export default MobileMenu;