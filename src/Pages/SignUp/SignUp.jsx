import './SignUp.scss'
import LogoRcrop from '../../assets/Backyard-logo-black.png';
import { useNavigate } from 'react-router-dom';

function SignUp (props) {
const navigate = useNavigate();

    return(
        <div className='signup'>
                <form className='signup__form' onSubmit={props.handleSignUp}>

                    <label className='signup__form--label' >email</label>
                    <input className='signup__form--input' type="email" name='email' placeholder='email' />

                    <label className='signup__form--label' >username</label>
                    <input className='signup__form--input' type="username" name='username' placeholder='username' />

                    <label className='signup__form--label' >password</label>
                    <input className='signup__form--input' type="password" name='password' placeholder='password' />

                    <button className='signup__form--button' type='submit'>Sign in</button>
                </form>
        </div>
    );
}

export default SignUp;


