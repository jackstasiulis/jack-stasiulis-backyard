import './SignIn.scss'
import LogoRcrop from '../../assets/Backyard-logo-black.png';
import { useNavigate } from 'react-router-dom';

function SignIn (props) {
const navigate = useNavigate();

    return(
        <div className='signin'>
            {!props.signedIn ? (
                <form className='signin__form' onSubmit={props.handleSignIn}>

                    <label className='signin__form--label' >username</label>
                    <input className='signin__form--input' type="username" name='username' placeholder='username' />

                    <label className='signin__form--label' >password</label>
                    <input className='signin__form--input' type="password" name='password' placeholder='password' />

                    <button className='signin__form--button' type='submit'>Sign in</button>
                </form>
            ) : ''}
        </div>
    );
}

export default SignIn;


